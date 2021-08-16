import { CfnVPC } from 'aws-cdk-lib/lib/aws-ec2';
import { Construct } from 'constructs';
import { Resource } from './resource';

export class Vpc extends Resource {
  public vpc: CfnVPC;

  constructor() {
    super();
  }

  public createResources(scope: Construct) {
    this.vpc = new CfnVPC(scope, 'Vpc', {
      cidrBlock: '10.0.0.0/16',
      tags: [{ key: 'Name', value: this.createResourceName(scope, 'vpc') }],
    });
  }
}
