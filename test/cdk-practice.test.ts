import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import { App } from 'aws-cdk-lib';
import * as CdkPractice from '../lib/cdk-practice-stack';

test('Empty Stack', () => {
  const app = new App();
  // WHEN
  const stack = new CdkPractice.CdkPracticeStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT,
    ),
  );
});
