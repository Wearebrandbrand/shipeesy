export type BoxType = {
  id: string
  label: string
  quantity: number | ""
  length: number | ""
  width: number | ""
  height: number | ""
}

export function calcBoxCbm(box: BoxType): number {
  if (
    box.quantity === "" ||
    box.length === "" ||
    box.width === "" ||
    box.height === ""
  ) {
    return 0
  }
  const qty = box.quantity
  const l = box.length
  const w = box.width
  const h = box.height

  // cm³ → m³ = / 1_000_000
  return (qty * l * w * h) / 1_000_000
}

export function formatCbm(value: number): string {
  return value.toFixed(2).replace(".", ",")
}
