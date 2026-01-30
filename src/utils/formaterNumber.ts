export function formatPokemonWeight(value: number) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)} T`;
  } else if (value < 1000) {
    return `${(value / 10).toFixed(1)} KG`;
  }
}

export function formatPokemonHeight(value: number) {
  if (value) {
    return `${(value / 10).toFixed(1)} M`;
  }
  return "N/A";
}