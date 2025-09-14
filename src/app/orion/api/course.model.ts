export class Course implements ICourse {
  id?: number;
  name!: string;
  description?: string | undefined;
  durationInMinutes!: number;
  isMandatory!: boolean;
  createdAt!: Date;
  updatedAt?: Date | undefined;
  isActive!: boolean;

  constructor(data?: ICourse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.description = _data["description"];
      this.durationInMinutes = _data["durationInMinutes"];
      this.isMandatory = _data["isMandatory"];
      this.createdAt = _data["createdAt"] ? new Date(_data["createdAt"].toString()) : undefined as any;
      this.updatedAt = _data["updatedAt"] ? new Date(_data["updatedAt"].toString()) : undefined as any;
      this.isActive = _data["isActive"];
    }
  }

  static fromJS(data: any): Course {
    data = typeof data === 'object' ? data : {};
    let result = new Course();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["description"] = this.description;
    data["durationInMinutes"] = this.durationInMinutes;
    data["isMandatory"] = this.isMandatory;
    data["createdAt"] = this.createdAt ? this.createdAt.toISOString() : undefined as any;
    data["updatedAt"] = this.updatedAt ? this.updatedAt.toISOString() : undefined as any;
    data["isActive"] = this.isActive;
    return data;
  }
}

export interface ICourse {
  id?: number;
  name: string;
  description?: string | undefined;
  durationInMinutes: number;
  isMandatory: boolean;
  createdAt: Date;
  updatedAt?: Date | undefined;
  isActive: boolean;
}
