const TRADUCCIONES = {
  'es': {
    'bienvenido': 'Bienvenido'
  },
  'en': {
    'bienvenido': 'Welcome'
  },
  'it': {
    'bienvenido': 'Benvenuti'
  },
}

export const traducir = (texto, idioma) => {
  return TRADUCCIONES[idioma][texto]
}