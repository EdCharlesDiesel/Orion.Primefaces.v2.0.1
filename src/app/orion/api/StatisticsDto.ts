export class StatisticsDto implements IStatisticsDto {
  localIpAddress?: string | undefined;
  localPort?: number;
  remoteIpAddress?: string | undefined;
  remotePort?: number;

  constructor(data?: IStatisticsDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.localIpAddress = _data["localIpAddress"];
      this.localPort = _data["localPort"];
      this.remoteIpAddress = _data["remoteIpAddress"];
      this.remotePort = _data["remotePort"];
    }
  }

  static fromJS(data: any): StatisticsDto {
    data = typeof data === 'object' ? data : {};
    let result = new StatisticsDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["localIpAddress"] = this.localIpAddress;
    data["localPort"] = this.localPort;
    data["remoteIpAddress"] = this.remoteIpAddress;
    data["remotePort"] = this.remotePort;
    return data;
  }
}
