const listeners = new Map(); 

export function subscribe(evento, callback) {
  if (!listeners.has(evento)) listeners.set(evento, new Set());
  listeners.get(evento).add(callback);

  return () => {
    const set = listeners.get(evento);
    if (!set) return;
    set.delete(callback);
    if (set.size === 0) listeners.delete(evento);
  };
}

export function emit(evento, dados) {
  listeners.get(evento)?.forEach((callback) => callback(dados));}