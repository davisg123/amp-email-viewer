import { module as HTMLTag } from '../../../preprocessing/preprocessing-modules/HTMLTag';
import { parseHTMLFragment, serializeHTML } from '../../../util';

describe('HTMLTag module', () => {
  // tslint:disable:no-any
  const config = {} as any;

  test('has correct name', () => {
    expect(HTMLTag.name).toBe('HTMLTag');
  });

  test('adds attributes to html tag', () => {
    const doc = parseHTMLFragment(`<!DOCTYPE html>
<html amp4email>
<head></head>
<body>Hello, world!</body>
</html>`);

    HTMLTag.transform(doc, config);
    expect(serializeHTML(doc)).toBe(`<!DOCTYPE html>
<html amp4email="" allow-xhr-interception="" allow-viewer-render-template="" report-errors-to-viewer=""><head></head>
<body>Hello, world!
</body></html>`);
  });
});
