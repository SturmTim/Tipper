export * from './tips.service';
import { TipsService } from './tips.service';
export * from './tipsAdmin.service';
import { TipsAdminService } from './tipsAdmin.service';
export const APIS = [TipsService, TipsAdminService];
