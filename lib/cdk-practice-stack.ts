import { Construct } from 'constructs';
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { CfnVPC } from 'aws-cdk-lib/lib/aws-ec2';

export class CdkPracticeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new CfnVPC(this, 'Vpc', {
      cidrBlock: '192.168.0.0/20',
      tags: [
        {
          key: 'Name',
          value: 'practice-dev-vpc',
        },
      ],
    });
  }
}
