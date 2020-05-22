// Load the SDK and UUID
const AWS = require("aws-sdk");
const uuid = require("node-uuid");

module.exports = {
  index(req, res) {
    res.json({Funcionou: "ok"})
    AWS.config.update({ region: "us-east-1" });
    const cost = new AWS.CostExplorer({ apiVersion: "2017-10-25" });

    let params = {
      /* Metric that returned in the query 
    Valid values are AmortizedCost, BlendedCost, NetAmortizedCost, NetUnblendedCost, NormalizedUsageAmount, UnblendedCost, and UsageQuantity.*/
      Metrics: ["UsageQuantity"],
      TimePeriod: {
        /* required */ End: "2020-04-01" /* required */,
        Start: "2020-03-01" /* required */,
      },
      Granularity: "MONTHLY",
      GroupBy: [
        {
          Key: "AZ",
          Type: "DIMENSION",
        },
      ],
    };

    cost.getCostAndUsage(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log(data.ResultsByTime[0].Groups);
      }
    });
  },
};
