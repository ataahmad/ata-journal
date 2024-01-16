import { executeQuery } from './scriptHelpers';
import { promises as fs } from 'fs';
import path from 'path';


const readFileContent = async (filePath: string): Promise<string> => {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        return content.trim();
    } catch (err) {
        console.error('Error reading file:', err);
        throw err;
    }
};


const addPersonalEntry = async (): Promise<void> => {
    const draftFilePath = path.join(process.cwd(), '/src/scripts/personalDraft.txt');

    try {
        const content = await readFileContent(draftFilePath);
        const insertQuery = 'INSERT INTO personal_entries (content) VALUES (?)';
        await executeQuery(insertQuery, [content]);
        console.log("Entry added successfully.");
    } catch (err) {
        console.error("Error in processing or database operation:\n", err);
    }
};

addPersonalEntry();