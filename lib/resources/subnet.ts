import { CfnSubnet, CfnVPC } from 'aws-cdk-lib/lib/aws-ec2';
import { Construct } from 'constructs';

export class Subnet {
  public public1a: CfnSubnet;
  public public1c: CfnSubnet;
  public app1a: CfnSubnet;
  public app1c: CfnSubnet;
  public db1a: CfnSubnet;
  public db1c: CfnSubnet;

  private readonly vpc: CfnVPC;

  constructor(vpc: CfnVPC) {
    this.vpc = vpc;
  }

  public createResources(scope: Construct) {
    const systemName = scope.node.tryGetContext('systemName');
    const envType = scope.node.tryGetContext('envType');

    this.public1a = new CfnSubnet(scope, 'SubnetPublic1a', {
      cidrBlock: '10.0.11.0/24',
      vpcId: this.vpc.ref,
      availabilityZone: 'ap-northeast-1a',
      tags: [{ key: 'Name', value: `${systemName}-${envType}-subnet-public-1a` }],
    });

    this.public1c = new CfnSubnet(scope, 'SubnetPublic1c', {
      cidrBlock: '10.0.12.0/24',
      vpcId: this.vpc.ref,
      availabilityZone: 'ap-northeast-1c',
      tags: [{ key: 'Name', value: `${systemName}-${envType}-subnet-public-1c` }],
    });

    this.app1a = new CfnSubnet(scope, 'SubnetApp1a', {
      cidrBlock: '10.0.21.0/24',
      vpcId: this.vpc.ref,
      availabilityZone: 'ap-northeast-1a',
      tags: [{ key: 'Name', value: `${systemName}-${envType}-subnet-app-1a` }],
    });

    this.app1c = new CfnSubnet(scope, 'SubnetApp1c', {
      cidrBlock: '10.0.22.0/24',
      vpcId: this.vpc.ref,
      availabilityZone: 'ap-northeast-1c',
      tags: [{ key: 'Name', value: `${systemName}-${envType}-subnet-app-1c` }],
    });

    this.db1a = new CfnSubnet(scope, 'SubnetDb1a', {
      cidrBlock: '10.0.31.0/24',
      vpcId: this.vpc.ref,
      availabilityZone: 'ap-northeast-1a',
      tags: [{ key: 'Name', value: `${systemName}-${envType}-subnet-db-1a` }],
    });

    this.db1c = new CfnSubnet(scope, 'SubnetDb1c', {
      cidrBlock: '10.0.32.0/24',
      vpcId: this.vpc.ref,
      availabilityZone: 'ap-northeast-1c',
      tags: [{ key: 'Name', value: `${systemName}-${envType}-subnet-db-1c` }],
    });
  }
}