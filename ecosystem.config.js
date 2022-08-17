module.exports = {
  apps : [{
    name: "twitter",
    script: './bin/www',
    instances: "max",
    watch: true,
    autorestart: true
  }
  ]
};
