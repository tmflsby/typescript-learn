import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import DellAnalyzer from './dellAnalyzer';
// import LeeAnalyzer from './leeAnalyzer';

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json');

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    console.log(fileContent)
    this.writeFile(fileContent);
  }

  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }
}

const secret = 'secretKey';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

// const analyzer = new LeeAnalyzer();
const analyzer = new DellAnalyzer();
new Crowller(url, analyzer);
