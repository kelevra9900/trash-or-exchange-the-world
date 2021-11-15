module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID', 'AKIAZK6ADPVBRNF4CVXO'),
      secretAccessKey: env('AWS_ACCESS_SECRET', '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'),
      region: 'us-east-2',
      params: {
        Bucket: 'seguridad-en-america',
      },
    },
  }
});