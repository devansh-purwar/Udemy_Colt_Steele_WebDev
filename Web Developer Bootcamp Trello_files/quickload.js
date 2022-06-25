(self.webpackChunktrello_client=self.webpackChunktrello_client||[]).push([[5771],{"./app/scripts/network/quick-queries.ts":(e,i,a)=>{"use strict";a.d(i,{Z:()=>k});const r=["name","closed","dateLastActivity","dateLastView","datePluginDisable","enterpriseOwned","idOrganization","prefs","premiumFeatures","shortLink","shortUrl","url","creationMethod","idEnterprise"].join(","),s=["name","closed","dateLastActivity","datePluginDisable","enterpriseOwned","idOrganization","prefs","premiumFeatures","shortLink","shortUrl","url","creationMethod","idEnterprise"].join(","),o=[r,"desc","descData","idTags","invitations","invited","labelNames","limits","memberships","powerUps","subscribed","templateGallery"].join(","),t=[r,"subscribed"].join(","),n=["activityBlocked","avatarUrl","bio","bioData","confirmed","fullName","idEnterprise","idMemberReferrer","initials","memberType","nonPublic","products","url","username"].join(","),d=[n,"idPremOrgsAdmin"].join(","),l=["name","displayName","products","prefs","premiumFeatures","logoHash","idEnterprise","tags","limits","credits"].join(","),c=[l,"memberships"].join(","),m=["badges","cardRole","closed","dateLastActivity","desc","descData","due","dueComplete","dueReminder","idAttachmentCover","idList","idBoard","idMembers","idShort","idLabels","limits","name","pos","shortUrl","shortLink","subscribed","url","locationName","address","coordinates","cover","isTemplate","start"].join(","),u=[r,"idTags"].join(","),p=[s,"idTags"].join(","),b=[l,"desc","descData","website","limits","billableCollaboratorCount"].join(","),g=["products","standing","billingDates","expirationDates","needsCreditCardUpdate","dateFirstSubscription","scheduledChange","trialExpiration"].join(","),f=["addAttachmentToCard","addChecklistToCard","addMemberToCard","commentCard","copyCommentCard","convertToCardFromCheckItem","createCard","copyCard","deleteAttachmentFromCard","emailCard","moveCardFromBoard","moveCardToBoard","removeChecklistFromCard","removeMemberFromCard","updateCard:idList","updateCard:closed","updateCard:due","updateCard:dueComplete","updateCheckItemStateOnCard","updateCustomFieldItem"].join(","),_=[f,"addMemberToBoard","addToOrganizationBoard","copyBoard","createBoard","createCustomField","createList","deleteCard","deleteCustomField","disablePlugin","disablePowerUp","enablePlugin","enablePowerUp","makeAdminOfBoard","makeNormalMemberOfBoard","makeObserverOfBoard","moveListFromBoard","moveListToBoard","removeFromOrganizationBoard","unconfirmedBoardInvitation","unconfirmedOrganizationInvitation","updateBoard","updateCustomField","updateList:closed"].join(","),h={lists:"open",list_fields:"name,closed,idBoard,pos,subscribed,limits,creationMethod,softLimit",cards:"visible",card_attachments:"cover",card_stickers:!0,card_fields:[m,"labels"].join(","),card_checklists:"none",enterprise:!0,enterprise_fields:"displayName",members:"all",member_fields:n,membersInvited:"all",membersInvited_fields:n,memberships_orgMemberType:!0,checklists:"none",organization:!0,organization_fields:"name,displayName,desc,descData,url,website,prefs,memberships,logoHash,products,limits,idEnterprise,premiumFeatures",organization_tags:!0,organization_enterprise:!0,organization_disable_mock:!0,myPrefs:!0,fields:o,pluginData:!0,organization_pluginData:!0,boardPlugins:!0},k={boardFieldsInLargeOrganization:p,boardFieldsMinimal:r,boardFieldsFull:o,boardFieldsMinimalSubscribed:t,memberFields:n,memberFieldsAndPremOrgsAdmin:d,organizationFieldsMinimal:l,organizationFieldsMinimalMemberships:c,paidAccountFieldsMinimal:g,cardFieldsBulk:m,boardFieldsInOrganization:u,organizationBoardsFields:b,cardActions:f,boardActions:_,card:{fields:"all",stickers:!0,attachments:!0,customFieldItems:!0,pluginData:!0},currentBoardMinimal:h,currentBoardSecondary:{fields:"",actions:_,actions_display:!0,actions_limit:50,action_memberCreator_fields:d,action_reactions:!0,checklists:"none",cards:"visible",card_fields:"",card_checklists:"all",card_checklist_checkItems:"none",labels:"all",labels_limit:1e3},currentBoardPluginData:{fields:"",boardPlugins:!0,cards:"visible",card_fields:"",card_attachments:!0,card_attachment_fields:"bytes,date,edgeColor,idMember,isUpload,mimeType,name,url",card_customFieldItems:!0,customFields:!0,card_pluginData:!0,organization:!0,organization_fields:""},memberBoards:{boards:"open,starred",board_fields:t,boardStars:!0,boardsInvited:"all",boardsInvited_fields:t,board_organization:!0,board_organization_fields:l,credits:"invitation,promoCode",organizations:"all",organization_fields:c,organizationsInvited:"all",organizationsInvited_fields:l,organization_paidAccount:!0,organization_paidAccount_fields:g,paidAccount:!0,paidAccount_fields:g},memberHeader:{campaigns:!0,channels:!0,logins:!0,organizations:"all",organization_paidAccount:!0,organization_paidAccount_fields:g,organization_fields:"name,displayName,idEnterprise,products",organization_enterprise:!0,paidAccount:!0,paidAccount_fields:g,pluginData:!0,savedSearches:!0,missedTransferDate:!0,enterpriseToExplicitlyOwnBoards:!0,enterpriseLicenses:!0,enterprises:!0,enterprise_filter:["saml","member","member-unconfirmed","owned"],enterprise_fields:"name,displayName,isRealEnterprise,idAdmins,organizationPrefs",enterpriseWithRequiredConversion:!0},organizationBoardsPage:{boards:"open",board_fields:u,board_starCounts:"organization",board_membershipCounts:"active",fields:b,paidAccount:!0,paidAccount_fields:g,enterprise:!0,memberships:"active",members:"all",tags:!0,billableCollaboratorCount:!0},memberQuickBoards:{fields:"idOrganizations",boards:"open,starred",board_fields:r,boardStars:!0,organizations:"all",organization_fields:"idBoards"},quickBoardsSearch:e=>({query:e,modelTypes:"boards",board_fields:r,partial:!0}),boardMinimalForDisplayCard:{lists:"open",list_fields:"name,closed,idBoard,pos,subscribed,limits,creationMethod,softLimit",enterprise:!0,enterprise_fields:"displayName",members:"all",member_fields:n,membersInvited:"all",membersInvited_fields:n,memberships_orgMemberType:!0,organization:!0,organization_fields:"name,displayName,desc,descData,url,website,prefs,memberships,logoHash,products,limits,idEnterprise",organization_tags:!0,organization_enterprise:!0,organization_disable_mock:!0,myPrefs:!0,fields:o,labels:"all",labels_limit:1e3},workspaceBoardsPageMinimal:{boards:"open",boards_count:29,boards_sortBy:"dateLastActivity",boards_sortOrder:"desc",board_fields:p,fields:b,paidAccount:!0,paidAccount_fields:g,enterprise:!0,tags:!0,memberships:"active",billableCollaboratorCount:!0}}},"./app/scripts/network/quickload.js":(e,i,a)=>{function r(e,i){return null!=e?i(e):void 0}const{isPossiblyValidOrgName:s}=a("./packages/organizations/src/isPossiblyValidOrgName.ts"),o=a("./app/scripts/network/quick-queries.ts").Z,t=function(e){try{return window.JSON.parse(e)}catch(e){return null}},n=function(e,i){const a=new XMLHttpRequest;a.open("GET",e,!0),a.setRequestHeader("Accept","application/json,text/plain"),a.setRequestHeader("X-Trello-Client-Version",window.trelloVersion||"dev-0"),a.onreadystatechange=function(){4===a.readyState&&(200!==a.status?i([a.status,a.responseText]):i(null,[t(a.responseText),a]))},a.send(null)},d=function(e,i){let a;null==i&&(i={});const s=[],o=/invite-token-[-a-f0-9]*=([^;]+)/g;for(;null!=(a=r(o.exec(document.cookie),(e=>e[1])));)s.push(unescape(a));if(s.length>0&&(i.invitationTokens=s.join(",")),new RegExp("^/1/search(/|$)").test(e)){const e=r(/dsc=([^;]+)/.exec(document.cookie),(e=>e[1]));i.dsc=e}return[e,(()=>{const e=[];for(const a in i){const r=i[a];e.push([a,encodeURIComponent(r)].join("="))}return e})().join("&")].join("?")},l={},c=location.pathname.substr(1),m=function(e){if(e in l)return delete l[e]},u=function(e){if(!e)return;const i={isLoading:!0,callbacks:[],start:Date.now(),used:!1,url:e};l[e]=i,n(e,(function(a,r){let s;if(i.isLoading=!1,a)for(s of(i.error=a,Array.from(i.callbacks)))s(a);else{for(s of(i.data=r,Array.from(i.callbacks)))s(null,r);setTimeout((()=>m(e)),1e4)}}))},p={init:function(){if(/token=/.test(document.cookie)||/token3000=/.test(document.cookie)||/token2999=/.test(document.cookie)){const e=d("/1/Members/me",o.memberHeader);for(const i of Array.from([e].concat(function(){let e,i,a,t,n;return""===c?[d("/1/Members/me",o.memberBoards)]:null!=(n=r(new RegExp("^/([^/]*)").exec(c),(e=>e[1])))?(n=decodeURIComponent(n).toLowerCase().replace(/[-_ ]+/g," "),n?[d("/1/Members/me",o.memberQuickBoards),d("/1/search",o.quickBoardsSearch(n))]:[d("/1/Members/me",o.memberQuickBoards)]):null!=(e=null!=(a=r(new RegExp("^b/([^/]+)").exec(c),(e=>e[1])))?a:r(new RegExp("^board/[^/]+/([^/]+)").exec(c),(e=>e[1])))?[d("/1/Boards/".concat(e),o.currentBoardMinimal),d("/1/Boards/".concat(e),o.currentBoardSecondary),d("/1/Boards/".concat(e),o.currentBoardPluginData)]:null!=(i=r(new RegExp("^c/([^/]+)").exec(c),(e=>e[1])))?[d("/1/Cards/".concat(i),o.card)]:null!=(t=r(new RegExp("^([^/]+)$").exec(c),(e=>e[1])))&&s(t)?[d("/1/Organizations/".concat(t),o.workspaceBoardsPageMinimal)]:[]}())))u(i)}},makeUrl:d,load(e,i){const a=l[e];if(null!=a)return a.used=!0,a.isLoading?a.callbacks.push(i):(i(a.error,a.data),m(e)),function(e){const i={};for(const a of["isLoading","start","used","url"])i[a]=e[a];return i}(a);n(e,i)},clear(){for(const e in l)m(e)}};e.exports.QuickLoad=window.QuickLoad=p},"./packages/organizations/src/isPossiblyValidOrgName.ts":(e,i,a)=>{"use strict";a.r(i),a.d(i,{isPossiblyValidOrgName:()=>s});const r=["blank","shortcuts","search","templates"],s=e=>/^[a-z0-9_]{3,}$/.test(e)&&-1===r.indexOf(e)}},e=>{var i;i="./app/scripts/network/quickload.js",e(e.s=i)}]);
//# sourceMappingURL=quickload.46ba3468aa460010f5ef.js.map