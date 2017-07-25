/**
 * 
 */

var imports = new JavaImporter(com.aliyuncs.profile, com.aliyuncs, com.aliyuncs.ecs.model.v20140526);

with(imports) {
	var profile = DefaultProfile.getProfile("ap-northeast-1", $ENV["KEYID"], $ENV["SECRET"]);
	var client = new DefaultAcsClient(profile);	
	var req = new CreateInstanceRequest();
	
	var req1 = new AllocatePublicIpAddressRequest();
	var req2 = new StartInstanceRequest();
	var req3 = new StopInstanceRequest();
	var req4 = new DeleteInstanceRequest();
}

req.setZoneId("ap-northeast-1a");
req.setImageId("centos_7_03_64_40G_alibase_20170625.vhd");
req.setInstanceType("ecs.e4.large");
req.setInstanceName("eg-jp-ecs-temp");
req.setInternetChargeType("PayByTraffic");	//	PayByBandwidth, PayByTraffic
req.setInternetMaxBandwidthOut(100);
req.setSystemDiskCategory("cloud_ssd");	//	cloud_ssd, cloud_efficiency, cloud_efficiency, cloud
req.setSystemDiskSize(40);
req.setPassword($ENV["PASSWD"]);
req.setVSwitchId("vsw-6weqz29yrd3mds5vmrgpq");
req.setHostName("eg-jp-ecs-temp");

try{
	var res, id;
	
//	//	create instance
	res = client.getAcsResponse(req);
	print(id = res.getInstanceId());
	
	//	alloc public ip
	req1.setInstanceId(id);
	res = client.getAcsResponse(req1);
	
	//	start the instance
	req2.setInstanceId(id);
	res = client.getAcsResponse(req2);
	
	//	stop the instance
	req3.setInstanceId(id);
	res = client.getAcsResponse(req3);
	
	//	release the instance
	req4.setInstanceId(id);
	res = client.getAcsResponse(req4);
	
}catch(e){
	print(e);
}
