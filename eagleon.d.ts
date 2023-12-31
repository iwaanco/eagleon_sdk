/*
EagleonSDK v1.0
*/
import { EagleonSDKActivitylogs, LogSettings } from './activitylogs.js';
import { EagleonSDKCms } from './cms.js';
/**
 * Eagleon SDK
 * @type {class}
 */
declare class EagleonSDK {
  ClientID: string;
  SecretKey: string;
  /**
   * @param {object} data
   * @param {string} data.ClientID Eagleon Client Id
   * @param {string} data.SecretKey Eagleon Secret key
   */
  constructor(data: { ClientID: string; SecretKey: string });
  cms(settings: { ClientID: string; SecretKey: string }): EagleonSDKCms;
  activitylogs(data: LogSettings): EagleonSDKActivitylogs;
}
