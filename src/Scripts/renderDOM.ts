export function rendering(query, block) {
  const root = document.querySelector(query);

  root.appendChild(block.getContent());
  return root;
}
