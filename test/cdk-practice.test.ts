import { expect as expectCDK, countResources, haveResource } from '@aws-cdk/assert';
import { App } from 'aws-cdk-lib';
import * as CdkPractice from '../lib/cdk-practice-stack';

test('Vpc', () => {
  const app = new App();
  // WHEN
  const stack = new CdkPractice.CdkPracticeStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(countResources('AWS::EC2::VPC', 1));
  expectCDK(stack).to(
    haveResource('AWS::EC2::VPC', {
      CidrBlock: '10.0.0.0/16',
      Tags: [{ Key: 'Name', Value: 'undefined-undefined-vpc' }],
    }),
  );
});

test('Subnet', () => {
  const app = new App();
  // WHEN
  const stack = new CdkPractice.CdkPracticeStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(countResources('AWS::EC2::Subnet', 6));
  expectCDK(stack).to(
    haveResource('AWS::EC2::Subnet', {
      CidrBlock: '10.0.11.0/24',
      AvailabilityZone: 'ap-northeast-1a',
      Tags: [{ Key: 'Name', Value: 'undefined-undefined-subnet-public-1a' }],
    }),
  );
  expectCDK(stack).to(
    haveResource('AWS::EC2::Subnet', {
      CidrBlock: '10.0.12.0/24',
      AvailabilityZone: 'ap-northeast-1c',
      Tags: [{ Key: 'Name', Value: 'undefined-undefined-subnet-public-1c' }],
    }),
  );
  expectCDK(stack).to(
    haveResource('AWS::EC2::Subnet', {
      CidrBlock: '10.0.21.0/24',
      AvailabilityZone: 'ap-northeast-1a',
      Tags: [{ Key: 'Name', Value: 'undefined-undefined-subnet-app-1a' }],
    }),
  );
  expectCDK(stack).to(
    haveResource('AWS::EC2::Subnet', {
      CidrBlock: '10.0.22.0/24',
      AvailabilityZone: 'ap-northeast-1c',
      Tags: [{ Key: 'Name', Value: 'undefined-undefined-subnet-app-1c' }],
    }),
  );
  expectCDK(stack).to(
    haveResource('AWS::EC2::Subnet', {
      CidrBlock: '10.0.31.0/24',
      AvailabilityZone: 'ap-northeast-1a',
      Tags: [{ Key: 'Name', Value: 'undefined-undefined-subnet-db-1a' }],
    }),
  );
  expectCDK(stack).to(
    haveResource('AWS::EC2::Subnet', {
      CidrBlock: '10.0.32.0/24',
      AvailabilityZone: 'ap-northeast-1c',
      Tags: [{ Key: 'Name', Value: 'undefined-undefined-subnet-db-1c' }],
    }),
  );
});
