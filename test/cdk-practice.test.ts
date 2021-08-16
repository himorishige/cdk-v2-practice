import { expect as expectCDK, countResources, haveResource } from '@aws-cdk/assert';
import { App } from 'aws-cdk-lib';
import * as CdkPractice from '../lib/cdk-practice-stack';

test('Empty Stack', () => {
  const app = new App();
  // WHEN
  const stack = new CdkPractice.CdkPracticeStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(countResources('AWS::EC2::VPC', 1));
  expectCDK(stack).to(
    haveResource('AWS::EC2::VPC', {
      CidrBlock: '192.168.0.0/20',
      Tags: [{ Key: 'Name', Value: 'practice-dev-vpc' }],
    }),
  );
});
