export function adicionarLista<T>(lista: T[], item: T): T[] {
    return [...lista, item];
}

export function removerLista<T>(lista: T[], indice: number): T[] {
    return lista.filter((_, i) => i !== indice);
}