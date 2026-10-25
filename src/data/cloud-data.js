export const cloudProviders = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    shortName: 'AWS',
    color: '#ff9900',
    description: 'The market leader with the most extensive catalog of services and global infrastructure.',
    strengths: ['Maturity', 'Ecosystem', 'Granular Control'],
    marketShare: '31%',
    launchYear: 2006
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    shortName: 'Azure',
    color: '#0089d6',
    description: 'The preferred choice for enterprises deeply integrated with Microsoft ecosystems.',
    strengths: ['Hybrid Cloud', 'Enterprise Integration', 'Security'],
    marketShare: '24%',
    launchYear: 2010
  },
  {
    id: 'gcp',
    name: 'Google Cloud Platform',
    shortName: 'GCP',
    color: '#4285f4',
    description: 'Leader in AI, data analytics, and container-native applications (Kubernetes).',
    strengths: ['Data Analytics', 'AI/ML', 'Developer Experience'],
    marketShare: '11%',
    launchYear: 2008
  }
];

export const serviceCategories = [
  {
    id: 'compute',
    name: 'Compute',
    description: 'Virtual machines, containers, and serverless computing models.',
    services: [
      { name: 'Virtual Machines', aws: 'EC2', azure: 'Virtual Machines', gcp: 'Compute Engine' },
      { name: 'Serverless Functions', aws: 'Lambda', azure: 'Functions', gcp: 'Cloud Functions' },
      { name: 'Container Orchestration', aws: 'EKS', azure: 'AKS', gcp: 'GKE' },
      { name: 'App Hosting', aws: 'App Runner', azure: 'App Service', gcp: 'Cloud Run' }
    ]
  },
  {
    id: 'storage',
    name: 'Storage',
    description: 'Object, block, and file storage for diverse data needs.',
    services: [
      { name: 'Object Storage', aws: 'S3', azure: 'Blob Storage', gcp: 'Cloud Storage' },
      { name: 'Block Storage', aws: 'EBS', azure: 'Managed Disks', gcp: 'Persistent Disk' },
      { name: 'File Storage', aws: 'EFS', azure: 'Files', gcp: 'Filestore' },
      { name: 'Archival', aws: 'S3 Glacier', azure: 'Archive Storage', gcp: 'Archive Class' }
    ]
  },
  {
    id: 'database',
    name: 'Databases',
    description: 'Relational, NoSQL, and caching database solutions.',
    services: [
      { name: 'Relational (SQL)', aws: 'RDS / Aurora', azure: 'SQL Database', gcp: 'Cloud SQL' },
      { name: 'NoSQL (Key-Value)', aws: 'DynamoDB', azure: 'Cosmos DB', gcp: 'Firestore' },
      { name: 'In-Memory Cache', aws: 'ElastiCache', azure: 'Cache for Redis', gcp: 'Memorystore' },
      { name: 'Data Warehouse', aws: 'Redshift', azure: 'Synapse Analytics', gcp: 'BigQuery' }
    ]
  },
  {
    id: 'networking',
    name: 'Networking',
    description: 'Global infrastructure, content delivery, and private networks.',
    services: [
      { name: 'Virtual Private Cloud', aws: 'VPC', azure: 'VNet', gcp: 'VPC' },
      { name: 'Content Delivery (CDN)', aws: 'CloudFront', azure: 'Front Door / CDN', gcp: 'Cloud CDN' },
      { name: 'DNS', aws: 'Route 53', azure: 'DNS', gcp: 'Cloud DNS' },
      { name: 'Load Balancing', aws: 'ELB', azure: 'Load Balancer', gcp: 'Cloud Load Balancing' }
    ]
  }
];

export const pricingModels = [
  {
    type: 'Pay-as-you-go (On-Demand)',
    description: 'Pay only for the resources you consume with no long-term commitment.',
    bestFor: 'Unpredictable workloads, testing, and development.'
  },
  {
    type: 'Reserved Instances / Savings Plans',
    description: 'Commit to a 1 or 3-year term for significant discounts (up to 72%).',
    bestFor: 'Steady-state, predictable production workloads.'
  },
  {
    type: 'Spot Instances / Preemptible VMs',
    description: 'Purchase unused capacity at massive discounts (up to 90%). Subject to interruption.',
    bestFor: 'Fault-tolerant tasks, big data processing, and batch jobs.'
  }
];

export const useCases = [
  {
    title: 'Startups & Scaleups',
    recommendation: 'AWS or GCP',
    reasoning: 'AWS offers the most mature ecosystem and startup credits. GCP provides excellent developer tools and simple pricing.'
  },
  {
    title: 'Enterprise & Hybrid Cloud',
    recommendation: 'Microsoft Azure',
    reasoning: 'Seamless integration with existing Active Directory, SQL Server, and Office 365 environments.'
  },
  {
    title: 'AI, ML & Big Data',
    recommendation: 'GCP',
    reasoning: 'Superior data analytics tools (BigQuery) and specialized AI hardware (TPUs).'
  }
];
