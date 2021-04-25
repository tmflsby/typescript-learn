// ts -> .d.ts 翻译文件 @types/superagent -> js
import superagent from 'superagent';

class Crowller {
  private secret = 'secretKey';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = '';

  constructor() {
    this.getRawHtml();
  }

  async getRawHtml() {
    const result = await superagent.get(this.url);
    console.log(result.text);
    this.rawHtml = result.text;
  }
}

const crowller = new Crowller();
