import { Analyzer } from './crowller';

class LeeAnalyzer implements Analyzer {
  public analyze(html: string, filePath: string) {
    return html;
  }
}

export default LeeAnalyzer;
