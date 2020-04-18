/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import path from 'path';
import fs from 'fs';
import csv from 'csv-parse';

import uploadConfig from '../config/uploadConfig';
import Transaction from '../models/Transaction';
import CreateTransactionService from './CreateTransactionService';

interface TransactionDTO {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class ImportTransactionsService {
  async execute(csvFileName: string): Promise<Transaction[]> {
    const csvFile = path.join(uploadConfig.directory, csvFileName);
    const createTransactionService = new CreateTransactionService();

    const transactions: TransactionDTO[] = [];
    const transactionsCreated: Transaction[] = [];

    const stream = fs
      .createReadStream(csvFile)
      .pipe(csv({ columns: true, from_line: 1, trim: true }));

    stream.on('data', row => {
      transactions.push({
        ...row,
        value: parseFloat(row.value),
      });
    });

    await new Promise(resolve => {
      stream.on('end', resolve);
    });

    for (const item of transactions) {
      const transactionAdd = await createTransactionService.execute(item);
      transactionsCreated.push(transactionAdd);
    }

    await fs.promises.unlink(csvFile);

    return transactionsCreated;
  }
}

export default ImportTransactionsService;
