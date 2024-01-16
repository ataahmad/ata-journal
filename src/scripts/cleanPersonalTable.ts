import * as readline from 'readline';
import { executeQuery } from './scriptHelpers';

const cleanPersonalTable = async (): Promise<void> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Are you sure you want to delete all entries in the personal_entries table? Type "delete" to confirm: ', async (answer) => {
        if (answer.toLowerCase() === 'delete') {
            try {
                await executeQuery('DELETE FROM journal_db.personal_entries');
                console.log('All entries have been deleted.');
            } catch (err) {
                console.error('Error Clearing DB: ', err);
            }
        } else {
            console.log('Deletion cancelled.');
        }
        rl.close();
    });
};

cleanPersonalTable();
