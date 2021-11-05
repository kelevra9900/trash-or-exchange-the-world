module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID', 'AKIAYOH3KIC7KX44VQ5J'),
        secretAccessKey: env('AWS_ACCESS_SECRET', '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'),
        region: 'us-east-2',
        params: {
          Bucket: 'trash-or',
        },
      },
    }
  });