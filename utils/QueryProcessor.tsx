export default function QueryProcessor(query: string) {
  const q = query.toLowerCase().trim();

  if (q.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (q.includes("andrew id") || q.includes("andrewid")) {
    return "songyij";
  }

  if (q.includes("name")) {
    return "songyij";
  }

  if (q.includes("plus")) {
    const numbers = q.match(/(-?\d+)/g);
    if (numbers && numbers.length === 2) {
      return (parseInt(numbers[0]) + parseInt(numbers[1])).toString();
    }
  }

  
}
