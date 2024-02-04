
import {subjects, verbs, objects} from './arrays.mjs'

  // Generate a random message
function generateRandomMessage() {
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
    
    return `${randomSubject} ${randomVerb} ${randomObject}.`;
  }
  
  // Example usage
  console.log(generateRandomMessage());