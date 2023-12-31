/*
EagleonSDK v1.0
*/
import { EagleonSDKActivitylogs } from './activitylogs.js';
import { EagleonSDKCms } from './cms.js';

/**
 * Eagleon SDK
 * @type {class}
 */
export class EagleonSDK {
  ClientID;
  SecretKey;
  /**
   * @param {object} data
   * @param {string} data.ClientID Eagleon Client Id
   * @param {string} data.SecretKey Eagleon Secret key
   */
  constructor(data = {}) {
    this.ClientID = data.ClientID;
    this.SecretKey = data.SecretKey;
  }
  async cms(settings = {}) {
    let cms = new EagleonSDKCms({
      ClientID: this.ClientID,
      SecretKey: this.SecretKey,
    });
    cms.render(settings);
    return cms;
  }
  activitylogs(obj = {}) {
    obj.ClientID = this.ClientID;
    obj.SecretKey = this.SecretKey;
    let activitylogs = new EagleonSDKActivitylogs(obj);
    return activitylogs;
  }
}
