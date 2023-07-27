/* eslint-disable no-unused-vars */

import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constant';

export function getRandomPrompt(prompt)
{
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // to cross check that it will not generate same random promt that will inside the constant folder with file name index.js
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

// export async function downloadImage(_id, photo) {
//     FileSaver.saveAs(photo, `download-${_id}.jpg`);
// }