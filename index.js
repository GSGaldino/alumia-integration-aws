// Load the SDK and UUID
const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const uuid = require('node-uuid');


const cost = new AWS.CostExplorer({ apiVersion: "2017-10-25" });


var params = {
  Metrics: ['AmortizedCost'],
  TimePeriod: { /* required */
    End: '2020-04-01', /* required */
    Start: '2020-03-01' /* required */,
  },
  Granularity: 'DAILY',
  GroupBy: [
    {
      Key: 'AZ',
      Type: 'DIMENSION'
    }
  ]
};


cost.getCostAndUsage(params, (err, data) => {
  if(err){
    console.log(err, err.stack)
  }else {
    console.log(data.ResultsByTime);
  }
})

