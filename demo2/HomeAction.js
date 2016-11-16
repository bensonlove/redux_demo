/*
 * @Author: Benson
 * @Date:   2016-11-15 23:50:31
 * @Last Modified by:   Benson
 * @Last Modified time: 2016-11-16 22:22:44
 */

const IOS = 'IOS';
const WEB = 'WEB';
const SNACK = 'SNACK';

function HomeAction() {
	var self = this;
	self.action_ios = function(languageName) {
		return {
			language: languageName,
			type: IOS
		}
	};
	self.action_web = function(languageName) {
		return {
			language: languageName,
			type: WEB
		}
	};
	self.action_snack = function(languageName) {
		return {
			language: languageName,
			type: SNACK
		}
	}
}
var homeAction = new HomeAction();
module.exports = homeAction;