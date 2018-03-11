class Btn {
  constructor (obj) {
    this.key = obj.key
    this.label = obj.label
    this.icon = obj.icon
    this.value = obj.value
    if (obj.symbol) {
      this.symbol = obj.symbol
    } else {
      this.symbol = obj.label
    }
  }

  get dati () {
    return {
      key: this.key,
      label: this.label,
      icon: this.icon,
      value: this.value
    }
  }
}

const BTN_0 = new Btn({key: 'N0', label: 0, value: '0'})
const BTN_1 = new Btn({key: 'N1', label: 1, value: '1'})
const BTN_2 = new Btn({key: 'N2', label: 2, value: '2'})
const BTN_3 = new Btn({key: 'N3', label: 3, value: '3'})
const BTN_4 = new Btn({key: 'N4', label: 4, value: '4'})
const BTN_5 = new Btn({key: 'N5', label: 5, value: '5'})
const BTN_6 = new Btn({key: 'N6', label: 6, value: '6'})
const BTN_7 = new Btn({key: 'N7', label: 7, value: '7'})
const BTN_8 = new Btn({key: 'N8', label: 8, value: '8'})
const BTN_9 = new Btn({key: 'N9', label: 9, value: '9'})

const BTN_DIVIDE = new Btn({key: 'DIVIDE', label: '÷', icon: 'mdi-division', value: 'DIVIDE'})
const BTN_MOLT = new Btn({key: 'MOLT', label: '*', icon: 'mdi-multiplication', value: 'MOLTIPLICA'})
const BTN_MINUS = new Btn({key: 'MINUS', label: '-', value: 'SOTTRAE'})
const BTN_PLUS = new Btn({key: 'PLUS', label: '+', icon: 'mdi-plus', value: 'SOMMA'})
const BTN_SIGN = new Btn({key: 'SIGN', label: '±', value: 'INVERTI'})
const BTN_POINT = new Btn({key: 'POINT', label: ',', value: 'DECIMALE'})
const BTN_RESULT = new Btn({key: 'RESULT', label: '=', icon: 'mdi-equal', value: 'RISULTATO'})

const BTN_OP_PERC = new Btn({key: 'OP_PERC', label: '%', icon: 'mdi-percent', value: 'PERCENTUALE'})
const BTN_OP_SQUARE = new Btn({key: 'OP_SQUARE', label: '√', icon: 'mdi-square-root', value: 'RADICE'})
const BTN_OP_POT = new Btn({key: 'OP_POT', label: 'x²', icon: 'mdi-format-superscript', value: 'ELEVA', symbol: '²'})
const BTN_OP_1DIV = new Btn({key: 'OP_1DIV', label: '⅟', value: '1DIV'})
const BTN_OP_CE = new Btn({key: 'OP_CE', label: 'CE', value: 'CANCELLAULTIMO'})
const BTN_OP_C = new Btn({key: 'OP_C', label: 'C', value: 'CANCELLATUTTO'})
const BTN_OP_DEL = new Btn({key: 'OP_DEL', label: '<-', icon: 'mdi-backspace', value: 'CANCELLAULTIMOCARATTERE', symbol: 'D'})

const state = {
  calcStandard: [
    [BTN_OP_PERC, BTN_OP_SQUARE, BTN_OP_POT, BTN_OP_1DIV],
    [BTN_OP_CE, BTN_OP_C, BTN_OP_DEL, BTN_DIVIDE],
    [BTN_7, BTN_8, BTN_9, BTN_MOLT],
    [BTN_4, BTN_5, BTN_6, BTN_MINUS],
    [BTN_1, BTN_2, BTN_3, BTN_PLUS],
    [BTN_SIGN, BTN_0, BTN_POINT, BTN_RESULT]
  ]
}

const getters = {
  listButtonsStandard (state) {
    return state.calcStandard
  },
  listButtonsAdvanced (state) {
    return state.calcAdvanced
  },
  listButtons: (state) => (typeCalc) => {
    const tipo = typeCalc.toLowerCase

    switch (tipo) {
      case 'standard':
        return state.calcStandard
      case 'scientifica':
        return state.calcStandard
      default:
        return state.calcStandard
    }
  }
}

export default {
  namespaced: true,
  state,
  getters
}
