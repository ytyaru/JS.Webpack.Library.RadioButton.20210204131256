//import './radio-button.css';
//import './lib/chroma-2.1.0.min.js'
import chroma from "chroma-js";
import ParserFactory from './parser/ParserFactory.js';
import Color from './Color.js';
export default class RadioButtonTag {
    static parse() {
        const radios = document.querySelectorAll('radio-button');
        console.log(radios );
        for (let radio of radios) {
            console.log(radio);
            ParserFactory.create(radio).create(radio);
        }
    }
    // 指定した<radio>のid属性値をもつ<input>に対して、指定したfuncを'change'イベントとして実装する
    static addChangeEventListener(radio_id, func, options={}) {
        for (let el of document.querySelectorAll(`input[type="radio"][name="${radio_id}"]`)) {
            el.addEventListener('change', func, options);
        }
    }
    static removeChangeEventListener(radio_id, func, options={}) {
        for (let el of document.querySelectorAll(`input[type="radio"][name="${radio_id}"]`)) {
            el.removeEventListener('change', func, options);
        }
    }
    static setMainColor(color) {
        console.log(color);
        Color.setMainColor(color);
    }
}
