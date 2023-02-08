import { useQuery } from "@tanstack/react-query";

async function fetchData() {
  const result = await fetch(`https://thronesapi.com/api/v2/Characters`);
  const json = await result.json();
  return json;
}

export function useCharacter() {
  return useQuery(["character"], fetchData);
}
