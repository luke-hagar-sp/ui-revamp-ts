import * as i0 from '@angular/core';
import { OnInit, ChangeDetectorRef, OnDestroy, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import * as sdk from 'sailpoint-api-client';
import { IdentityV2025, TransformReadV2025 } from 'sailpoint-api-client';
import { AxiosResponse } from 'axios';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Sort } from '@angular/material/sort';
import * as rxjs from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as sequential_workflow_model from 'sequential-workflow-model';
import { Definition, Step, Properties, Branches } from 'sequential-workflow-model';
import * as sequential_workflow_editor_model from 'sequential-workflow-editor-model';
import { DefinitionModel } from 'sequential-workflow-editor-model';
import { ValidatorConfiguration, StepEditorProvider, RootEditorProvider, StepsConfiguration, ToolboxConfiguration, Designer, StepEditorContext, RootEditorContext } from 'sequential-workflow-designer';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';

declare class SailPointSDKService {
    private electronAPI;
    constructor();
    getAccessModelMetadataAttribute(requestParameters: sdk.AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeRequest): Promise<AxiosResponse<sdk.AttributeDTOV2025, any>>;
    getAccessModelMetadataAttributeValue(requestParameters: sdk.AccessModelMetadataV2025ApiGetAccessModelMetadataAttributeValueRequest): Promise<AxiosResponse<sdk.AttributeValueDTOV2025, any>>;
    listAccessModelMetadataAttribute(requestParameters?: sdk.AccessModelMetadataV2025ApiListAccessModelMetadataAttributeRequest): Promise<AxiosResponse<Array<sdk.AttributeDTOV2025>, any>>;
    listAccessModelMetadataAttributeValue(requestParameters: sdk.AccessModelMetadataV2025ApiListAccessModelMetadataAttributeValueRequest): Promise<AxiosResponse<Array<sdk.AttributeValueDTOV2025>, any>>;
    createAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiCreateAccessProfileRequest): Promise<AxiosResponse<sdk.AccessProfileV2025, any>>;
    deleteAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiDeleteAccessProfileRequest): Promise<AxiosResponse<void, any>>;
    deleteAccessProfilesInBulk(requestParameters: sdk.AccessProfilesV2025ApiDeleteAccessProfilesInBulkRequest): Promise<AxiosResponse<sdk.AccessProfileBulkDeleteResponseV2025, any>>;
    getAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiGetAccessProfileRequest): Promise<AxiosResponse<sdk.AccessProfileV2025, any>>;
    getAccessProfileEntitlements(requestParameters: sdk.AccessProfilesV2025ApiGetAccessProfileEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
    listAccessProfiles(requestParameters?: sdk.AccessProfilesV2025ApiListAccessProfilesRequest): Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>>;
    patchAccessProfile(requestParameters: sdk.AccessProfilesV2025ApiPatchAccessProfileRequest): Promise<AxiosResponse<sdk.AccessProfileV2025, any>>;
    updateAccessProfilesInBulk(requestParameters: sdk.AccessProfilesV2025ApiUpdateAccessProfilesInBulkRequest): Promise<AxiosResponse<Array<sdk.AccessProfileUpdateItemV2025>, any>>;
    approveAccessRequest(requestParameters: sdk.AccessRequestApprovalsV2025ApiApproveAccessRequestRequest): Promise<AxiosResponse<object, any>>;
    forwardAccessRequest(requestParameters: sdk.AccessRequestApprovalsV2025ApiForwardAccessRequestRequest): Promise<AxiosResponse<object, any>>;
    getAccessRequestApprovalSummary(requestParameters?: sdk.AccessRequestApprovalsV2025ApiGetAccessRequestApprovalSummaryRequest): Promise<AxiosResponse<sdk.ApprovalSummaryV2025, any>>;
    listAccessRequestApprovers(requestParameters: sdk.AccessRequestApprovalsV2025ApiListAccessRequestApproversRequest): Promise<AxiosResponse<Array<sdk.AccessRequestApproversListResponseV2025>, any>>;
    listCompletedApprovals(requestParameters?: sdk.AccessRequestApprovalsV2025ApiListCompletedApprovalsRequest): Promise<AxiosResponse<Array<sdk.CompletedApprovalV2025>, any>>;
    listPendingApprovals(requestParameters?: sdk.AccessRequestApprovalsV2025ApiListPendingApprovalsRequest): Promise<AxiosResponse<Array<sdk.PendingApprovalV2025>, any>>;
    rejectAccessRequest(requestParameters: sdk.AccessRequestApprovalsV2025ApiRejectAccessRequestRequest): Promise<AxiosResponse<object, any>>;
    getAccessRequestIdentityMetrics(requestParameters: sdk.AccessRequestIdentityMetricsV2025ApiGetAccessRequestIdentityMetricsRequest): Promise<AxiosResponse<object, any>>;
    approveBulkAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiApproveBulkAccessRequestRequest): Promise<AxiosResponse<object, any>>;
    cancelAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiCancelAccessRequestRequest): Promise<AxiosResponse<object, any>>;
    cancelAccessRequestInBulk(requestParameters: sdk.AccessRequestsV2025ApiCancelAccessRequestInBulkRequest): Promise<AxiosResponse<object, any>>;
    closeAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiCloseAccessRequestRequest): Promise<AxiosResponse<object, any>>;
    createAccessRequest(requestParameters: sdk.AccessRequestsV2025ApiCreateAccessRequestRequest): Promise<AxiosResponse<sdk.AccessRequestResponseV2025, any>>;
    getAccessRequestConfig(): Promise<AxiosResponse<sdk.AccessRequestConfigV2025, any>>;
    getEntitlementDetailsForIdentity(requestParameters: sdk.AccessRequestsV2025ApiGetEntitlementDetailsForIdentityRequest): Promise<AxiosResponse<sdk.IdentityEntitlementDetailsV2025, any>>;
    listAccessRequestStatus(requestParameters?: sdk.AccessRequestsV2025ApiListAccessRequestStatusRequest): Promise<AxiosResponse<Array<sdk.RequestedItemStatusV2025>, any>>;
    listAdministratorsAccessRequestStatus(requestParameters?: sdk.AccessRequestsV2025ApiListAdministratorsAccessRequestStatusRequest): Promise<AxiosResponse<Array<sdk.AccessRequestAdminItemStatusV2025>, any>>;
    loadAccountSelections(requestParameters: sdk.AccessRequestsV2025ApiLoadAccountSelectionsRequest): Promise<AxiosResponse<sdk.AccountsSelectionResponseV2025, any>>;
    setAccessRequestConfig(requestParameters: sdk.AccessRequestsV2025ApiSetAccessRequestConfigRequest): Promise<AxiosResponse<sdk.AccessRequestConfigV2025, any>>;
    getAccountActivity(requestParameters: sdk.AccountActivitiesV2025ApiGetAccountActivityRequest): Promise<AxiosResponse<sdk.AccountActivityV2025, any>>;
    listAccountActivities(requestParameters?: sdk.AccountActivitiesV2025ApiListAccountActivitiesRequest): Promise<AxiosResponse<Array<sdk.AccountActivityV2025>, any>>;
    getAccountAggregationStatus(requestParameters: sdk.AccountAggregationsV2025ApiGetAccountAggregationStatusRequest): Promise<AxiosResponse<sdk.AccountAggregationStatusV2025, any>>;
    getUsagesByAccountId(requestParameters: sdk.AccountUsagesV2025ApiGetUsagesByAccountIdRequest): Promise<AxiosResponse<Array<sdk.AccountUsageV2025>, any>>;
    createAccount(requestParameters: sdk.AccountsV2025ApiCreateAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
    deleteAccount(requestParameters: sdk.AccountsV2025ApiDeleteAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
    deleteAccountAsync(requestParameters: sdk.AccountsV2025ApiDeleteAccountAsyncRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>>;
    disableAccount(requestParameters: sdk.AccountsV2025ApiDisableAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
    disableAccountForIdentity(requestParameters: sdk.AccountsV2025ApiDisableAccountForIdentityRequest): Promise<AxiosResponse<object, any>>;
    disableAccountsForIdentities(requestParameters: sdk.AccountsV2025ApiDisableAccountsForIdentitiesRequest): Promise<AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>>;
    enableAccount(requestParameters: sdk.AccountsV2025ApiEnableAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
    enableAccountForIdentity(requestParameters: sdk.AccountsV2025ApiEnableAccountForIdentityRequest): Promise<AxiosResponse<object, any>>;
    enableAccountsForIdentities(requestParameters: sdk.AccountsV2025ApiEnableAccountsForIdentitiesRequest): Promise<AxiosResponse<Array<sdk.BulkIdentitiesAccountsResponseV2025>, any>>;
    getAccount(requestParameters: sdk.AccountsV2025ApiGetAccountRequest): Promise<AxiosResponse<sdk.AccountV2025, any>>;
    getAccountEntitlements(requestParameters: sdk.AccountsV2025ApiGetAccountEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
    listAccounts(requestParameters?: sdk.AccountsV2025ApiListAccountsRequest): Promise<AxiosResponse<Array<sdk.AccountV2025>, any>>;
    putAccount(requestParameters: sdk.AccountsV2025ApiPutAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
    submitReloadAccount(requestParameters: sdk.AccountsV2025ApiSubmitReloadAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
    unlockAccount(requestParameters: sdk.AccountsV2025ApiUnlockAccountRequest): Promise<AxiosResponse<sdk.AccountsAsyncResultV2025, any>>;
    updateAccount(requestParameters: sdk.AccountsV2025ApiUpdateAccountRequest): Promise<AxiosResponse<object, any>>;
    getDiscoveredApplications(requestParameters?: sdk.ApplicationDiscoveryV2025ApiGetDiscoveredApplicationsRequest): Promise<AxiosResponse<Array<sdk.GetDiscoveredApplications200ResponseInnerV2025>, any>>;
    getManualDiscoverApplicationsCsvTemplate(): Promise<AxiosResponse<sdk.ManualDiscoverApplicationsTemplateV2025, any>>;
    sendManualDiscoverApplicationsCsvTemplate(requestParameters: sdk.ApplicationDiscoveryV2025ApiSendManualDiscoverApplicationsCsvTemplateRequest): Promise<AxiosResponse<void, any>>;
    getApproval(requestParameters: sdk.ApprovalsV2025ApiGetApprovalRequest): Promise<AxiosResponse<sdk.ApprovalV2025, any>>;
    getApprovals(requestParameters?: sdk.ApprovalsV2025ApiGetApprovalsRequest): Promise<AxiosResponse<Array<sdk.ApprovalV2025>, any>>;
    createSourceApp(requestParameters: sdk.AppsV2025ApiCreateSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppV2025, any>>;
    deleteAccessProfilesFromSourceAppByBulk(requestParameters: sdk.AppsV2025ApiDeleteAccessProfilesFromSourceAppByBulkRequest): Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>>;
    deleteSourceApp(requestParameters: sdk.AppsV2025ApiDeleteSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppV2025, any>>;
    getSourceApp(requestParameters: sdk.AppsV2025ApiGetSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppV2025, any>>;
    listAccessProfilesForSourceApp(requestParameters: sdk.AppsV2025ApiListAccessProfilesForSourceAppRequest): Promise<AxiosResponse<Array<sdk.AccessProfileDetailsV2025>, any>>;
    listAllSourceApp(requestParameters?: sdk.AppsV2025ApiListAllSourceAppRequest): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>>;
    listAllUserApps(requestParameters: sdk.AppsV2025ApiListAllUserAppsRequest): Promise<AxiosResponse<Array<sdk.UserAppV2025>, any>>;
    listAssignedSourceApp(requestParameters?: sdk.AppsV2025ApiListAssignedSourceAppRequest): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>>;
    listAvailableAccountsForUserApp(requestParameters: sdk.AppsV2025ApiListAvailableAccountsForUserAppRequest): Promise<AxiosResponse<Array<sdk.AppAccountDetailsV2025>, any>>;
    listAvailableSourceApps(requestParameters?: sdk.AppsV2025ApiListAvailableSourceAppsRequest): Promise<AxiosResponse<Array<sdk.SourceAppV2025>, any>>;
    listOwnedUserApps(requestParameters?: sdk.AppsV2025ApiListOwnedUserAppsRequest): Promise<AxiosResponse<Array<sdk.UserAppV2025>, any>>;
    patchSourceApp(requestParameters: sdk.AppsV2025ApiPatchSourceAppRequest): Promise<AxiosResponse<sdk.SourceAppPatchDtoV2025, any>>;
    patchUserApp(requestParameters: sdk.AppsV2025ApiPatchUserAppRequest): Promise<AxiosResponse<sdk.UserAppV2025, any>>;
    updateSourceAppsInBulk(requestParameters?: sdk.AppsV2025ApiUpdateSourceAppsInBulkRequest): Promise<AxiosResponse<void, any>>;
    getProfileConfig(requestParameters: sdk.AuthProfileV2025ApiGetProfileConfigRequest): Promise<AxiosResponse<sdk.AuthProfileV2025, any>>;
    getProfileConfigList(requestParameters?: sdk.AuthProfileV2025ApiGetProfileConfigListRequest): Promise<AxiosResponse<Array<sdk.AuthProfileSummaryV2025>, any>>;
    patchProfileConfig(requestParameters: sdk.AuthProfileV2025ApiPatchProfileConfigRequest): Promise<AxiosResponse<sdk.AuthProfileV2025, any>>;
    getAuthUser(requestParameters: sdk.AuthUsersV2025ApiGetAuthUserRequest): Promise<AxiosResponse<sdk.AuthUserV2025, any>>;
    patchAuthUser(requestParameters: sdk.AuthUsersV2025ApiPatchAuthUserRequest): Promise<AxiosResponse<sdk.AuthUserV2025, any>>;
    createBrandingItem(requestParameters: sdk.BrandingV2025ApiCreateBrandingItemRequest): Promise<AxiosResponse<sdk.BrandingItemV2025, any>>;
    deleteBranding(requestParameters: sdk.BrandingV2025ApiDeleteBrandingRequest): Promise<AxiosResponse<void, any>>;
    getBranding(requestParameters: sdk.BrandingV2025ApiGetBrandingRequest): Promise<AxiosResponse<sdk.BrandingItemV2025, any>>;
    getBrandingList(): Promise<AxiosResponse<Array<sdk.BrandingItemV2025>, any>>;
    setBrandingItem(requestParameters: sdk.BrandingV2025ApiSetBrandingItemRequest): Promise<AxiosResponse<sdk.BrandingItemV2025, any>>;
    createCampaignFilter(requestParameters: sdk.CertificationCampaignFiltersV2025ApiCreateCampaignFilterRequest): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>>;
    deleteCampaignFilters(requestParameters: sdk.CertificationCampaignFiltersV2025ApiDeleteCampaignFiltersRequest): Promise<AxiosResponse<void, any>>;
    getCampaignFilterById(requestParameters: sdk.CertificationCampaignFiltersV2025ApiGetCampaignFilterByIdRequest): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>>;
    listCampaignFilters(requestParameters?: sdk.CertificationCampaignFiltersV2025ApiListCampaignFiltersRequest): Promise<AxiosResponse<sdk.ListCampaignFilters200ResponseV2025, any>>;
    updateCampaignFilter(requestParameters: sdk.CertificationCampaignFiltersV2025ApiUpdateCampaignFilterRequest): Promise<AxiosResponse<sdk.CampaignFilterDetailsV2025, any>>;
    completeCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiCompleteCampaignRequest): Promise<AxiosResponse<object, any>>;
    createCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiCreateCampaignRequest): Promise<AxiosResponse<sdk.CampaignV2025, any>>;
    createCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiCreateCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>>;
    deleteCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignTemplateRequest): Promise<AxiosResponse<void, any>>;
    deleteCampaignTemplateSchedule(requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignTemplateScheduleRequest): Promise<AxiosResponse<void, any>>;
    deleteCampaigns(requestParameters: sdk.CertificationCampaignsV2025ApiDeleteCampaignsRequest): Promise<AxiosResponse<object, any>>;
    getActiveCampaigns(requestParameters?: sdk.CertificationCampaignsV2025ApiGetActiveCampaignsRequest): Promise<AxiosResponse<Array<sdk.GetActiveCampaigns200ResponseInnerV2025>, any>>;
    getCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignRequest): Promise<AxiosResponse<sdk.GetCampaign200ResponseV2025, any>>;
    getCampaignReports(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignReportsRequest): Promise<AxiosResponse<Array<sdk.CampaignReportV2025>, any>>;
    getCampaignReportsConfig(): Promise<AxiosResponse<sdk.CampaignReportsConfigV2025, any>>;
    getCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>>;
    getCampaignTemplateSchedule(requestParameters: sdk.CertificationCampaignsV2025ApiGetCampaignTemplateScheduleRequest): Promise<AxiosResponse<sdk.ScheduleV2025, any>>;
    getCampaignTemplates(requestParameters?: sdk.CertificationCampaignsV2025ApiGetCampaignTemplatesRequest): Promise<AxiosResponse<Array<sdk.CampaignTemplateV2025>, any>>;
    move(requestParameters: sdk.CertificationCampaignsV2025ApiMoveRequest): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>>;
    patchCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiPatchCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignTemplateV2025, any>>;
    setCampaignReportsConfig(requestParameters: sdk.CertificationCampaignsV2025ApiSetCampaignReportsConfigRequest): Promise<AxiosResponse<sdk.CampaignReportsConfigV2025, any>>;
    setCampaignTemplateSchedule(requestParameters: sdk.CertificationCampaignsV2025ApiSetCampaignTemplateScheduleRequest): Promise<AxiosResponse<void, any>>;
    startCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignRequest): Promise<AxiosResponse<object, any>>;
    startCampaignRemediationScan(requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignRemediationScanRequest): Promise<AxiosResponse<object, any>>;
    startCampaignReport(requestParameters: sdk.CertificationCampaignsV2025ApiStartCampaignReportRequest): Promise<AxiosResponse<object, any>>;
    startGenerateCampaignTemplate(requestParameters: sdk.CertificationCampaignsV2025ApiStartGenerateCampaignTemplateRequest): Promise<AxiosResponse<sdk.CampaignReferenceV2025, any>>;
    updateCampaign(requestParameters: sdk.CertificationCampaignsV2025ApiUpdateCampaignRequest): Promise<AxiosResponse<sdk.SlimCampaignV2025, any>>;
    getIdentityAccessSummaries(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentityAccessSummariesRequest): Promise<AxiosResponse<Array<sdk.AccessSummaryV2025>, any>>;
    getIdentityDecisionSummary(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentityDecisionSummaryRequest): Promise<AxiosResponse<sdk.IdentityCertDecisionSummaryV2025, any>>;
    getIdentitySummaries(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentitySummariesRequest): Promise<AxiosResponse<Array<sdk.CertificationIdentitySummaryV2025>, any>>;
    getIdentitySummary(requestParameters: sdk.CertificationSummariesV2025ApiGetIdentitySummaryRequest): Promise<AxiosResponse<sdk.CertificationIdentitySummaryV2025, any>>;
    getCertificationTask(requestParameters: sdk.CertificationsV2025ApiGetCertificationTaskRequest): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>>;
    getIdentityCertification(requestParameters: sdk.CertificationsV2025ApiGetIdentityCertificationRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
    getIdentityCertificationItemPermissions(requestParameters: sdk.CertificationsV2025ApiGetIdentityCertificationItemPermissionsRequest): Promise<AxiosResponse<Array<sdk.PermissionDtoV2025>, any>>;
    getPendingCertificationTasks(requestParameters?: sdk.CertificationsV2025ApiGetPendingCertificationTasksRequest): Promise<AxiosResponse<Array<sdk.CertificationTaskV2025>, any>>;
    listCertificationReviewers(requestParameters: sdk.CertificationsV2025ApiListCertificationReviewersRequest): Promise<AxiosResponse<Array<sdk.IdentityReferenceWithNameAndEmailV2025>, any>>;
    listIdentityAccessReviewItems(requestParameters: sdk.CertificationsV2025ApiListIdentityAccessReviewItemsRequest): Promise<AxiosResponse<Array<sdk.AccessReviewItemV2025>, any>>;
    listIdentityCertifications(requestParameters?: sdk.CertificationsV2025ApiListIdentityCertificationsRequest): Promise<AxiosResponse<Array<sdk.IdentityCertificationDtoV2025>, any>>;
    makeIdentityDecision(requestParameters: sdk.CertificationsV2025ApiMakeIdentityDecisionRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
    reassignIdentityCertifications(requestParameters: sdk.CertificationsV2025ApiReassignIdentityCertificationsRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
    signOffIdentityCertification(requestParameters: sdk.CertificationsV2025ApiSignOffIdentityCertificationRequest): Promise<AxiosResponse<sdk.IdentityCertificationDtoV2025, any>>;
    submitReassignCertsAsync(requestParameters: sdk.CertificationsV2025ApiSubmitReassignCertsAsyncRequest): Promise<AxiosResponse<sdk.CertificationTaskV2025, any>>;
    deleteClassifyMachineAccountFromSource(requestParameters: sdk.ClassifySourceV2025ApiDeleteClassifyMachineAccountFromSourceRequest): Promise<AxiosResponse<void, any>>;
    getClassifyMachineAccountFromSourceStatus(requestParameters: sdk.ClassifySourceV2025ApiGetClassifyMachineAccountFromSourceStatusRequest): Promise<AxiosResponse<sdk.SourceClassificationStatusV2025, any>>;
    sendClassifyMachineAccountFromSource(requestParameters: sdk.ClassifySourceV2025ApiSendClassifyMachineAccountFromSourceRequest): Promise<AxiosResponse<sdk.SendClassifyMachineAccountFromSource200ResponseV2025, any>>;
    createDeploy(requestParameters: sdk.ConfigurationHubV2025ApiCreateDeployRequest): Promise<AxiosResponse<sdk.DeployResponseV2025, any>>;
    createObjectMapping(requestParameters: sdk.ConfigurationHubV2025ApiCreateObjectMappingRequest): Promise<AxiosResponse<sdk.ObjectMappingResponseV2025, any>>;
    createObjectMappings(requestParameters: sdk.ConfigurationHubV2025ApiCreateObjectMappingsRequest): Promise<AxiosResponse<sdk.ObjectMappingBulkCreateResponseV2025, any>>;
    createScheduledAction(requestParameters: sdk.ConfigurationHubV2025ApiCreateScheduledActionRequest): Promise<AxiosResponse<sdk.ScheduledActionResponseV2025, any>>;
    createUploadedConfiguration(requestParameters: sdk.ConfigurationHubV2025ApiCreateUploadedConfigurationRequest): Promise<AxiosResponse<sdk.BackupResponseV2025, any>>;
    deleteBackup(requestParameters: sdk.ConfigurationHubV2025ApiDeleteBackupRequest): Promise<AxiosResponse<void, any>>;
    deleteDraft(requestParameters: sdk.ConfigurationHubV2025ApiDeleteDraftRequest): Promise<AxiosResponse<void, any>>;
    deleteObjectMapping(requestParameters: sdk.ConfigurationHubV2025ApiDeleteObjectMappingRequest): Promise<AxiosResponse<void, any>>;
    deleteScheduledAction(requestParameters: sdk.ConfigurationHubV2025ApiDeleteScheduledActionRequest): Promise<AxiosResponse<void, any>>;
    deleteUploadedConfiguration(requestParameters: sdk.ConfigurationHubV2025ApiDeleteUploadedConfigurationRequest): Promise<AxiosResponse<void, any>>;
    getDeploy(requestParameters: sdk.ConfigurationHubV2025ApiGetDeployRequest): Promise<AxiosResponse<sdk.DeployResponseV2025, any>>;
    getObjectMappings(requestParameters: sdk.ConfigurationHubV2025ApiGetObjectMappingsRequest): Promise<AxiosResponse<Array<sdk.ObjectMappingResponseV2025>, any>>;
    getUploadedConfiguration(requestParameters: sdk.ConfigurationHubV2025ApiGetUploadedConfigurationRequest): Promise<AxiosResponse<sdk.BackupResponseV2025, any>>;
    listBackups(requestParameters?: sdk.ConfigurationHubV2025ApiListBackupsRequest): Promise<AxiosResponse<Array<sdk.BackupResponse1V2025>, any>>;
    listDeploys(): Promise<AxiosResponse<sdk.ListDeploys200ResponseV2025, any>>;
    listDrafts(requestParameters?: sdk.ConfigurationHubV2025ApiListDraftsRequest): Promise<AxiosResponse<Array<sdk.DraftResponseV2025>, any>>;
    listScheduledActions(): Promise<AxiosResponse<Array<sdk.ScheduledActionResponseV2025>, any>>;
    listUploadedConfigurations(requestParameters?: sdk.ConfigurationHubV2025ApiListUploadedConfigurationsRequest): Promise<AxiosResponse<Array<sdk.BackupResponseV2025>, any>>;
    updateObjectMappings(requestParameters: sdk.ConfigurationHubV2025ApiUpdateObjectMappingsRequest): Promise<AxiosResponse<sdk.ObjectMappingBulkPatchResponseV2025, any>>;
    updateScheduledAction(requestParameters: sdk.ConfigurationHubV2025ApiUpdateScheduledActionRequest): Promise<AxiosResponse<sdk.ScheduledActionResponseV2025, any>>;
    createConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiCreateConnectorCustomizerRequest): Promise<AxiosResponse<sdk.ConnectorCustomizerCreateResponseV2025, any>>;
    createConnectorCustomizerVersion(requestParameters: sdk.ConnectorCustomizersV2025ApiCreateConnectorCustomizerVersionRequest): Promise<AxiosResponse<sdk.ConnectorCustomizerVersionCreateResponseV2025, any>>;
    deleteConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiDeleteConnectorCustomizerRequest): Promise<AxiosResponse<void, any>>;
    getConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiGetConnectorCustomizerRequest): Promise<AxiosResponse<sdk.ConnectorCustomizersResponseV2025, any>>;
    listConnectorCustomizers(requestParameters?: sdk.ConnectorCustomizersV2025ApiListConnectorCustomizersRequest): Promise<AxiosResponse<Array<sdk.ConnectorCustomizersResponseV2025>, any>>;
    putConnectorCustomizer(requestParameters: sdk.ConnectorCustomizersV2025ApiPutConnectorCustomizerRequest): Promise<AxiosResponse<sdk.ConnectorCustomizerUpdateResponseV2025, any>>;
    createConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiCreateConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>>;
    deleteConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiDeleteConnectorRuleRequest): Promise<AxiosResponse<void, any>>;
    getConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiGetConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>>;
    getConnectorRuleList(requestParameters?: sdk.ConnectorRuleManagementV2025ApiGetConnectorRuleListRequest): Promise<AxiosResponse<Array<sdk.ConnectorRuleResponseV2025>, any>>;
    putConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiPutConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleResponseV2025, any>>;
    testConnectorRule(requestParameters: sdk.ConnectorRuleManagementV2025ApiTestConnectorRuleRequest): Promise<AxiosResponse<sdk.ConnectorRuleValidationResponseV2025, any>>;
    createCustomConnector(requestParameters: sdk.ConnectorsV2025ApiCreateCustomConnectorRequest): Promise<AxiosResponse<sdk.V3ConnectorDtoV2025, any>>;
    deleteCustomConnector(requestParameters: sdk.ConnectorsV2025ApiDeleteCustomConnectorRequest): Promise<AxiosResponse<void, any>>;
    getConnector(requestParameters: sdk.ConnectorsV2025ApiGetConnectorRequest): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>>;
    getConnectorCorrelationConfig(requestParameters: sdk.ConnectorsV2025ApiGetConnectorCorrelationConfigRequest): Promise<AxiosResponse<string, any>>;
    getConnectorList(requestParameters?: sdk.ConnectorsV2025ApiGetConnectorListRequest): Promise<AxiosResponse<Array<sdk.V3ConnectorDtoV2025>, any>>;
    getConnectorSourceConfig(requestParameters: sdk.ConnectorsV2025ApiGetConnectorSourceConfigRequest): Promise<AxiosResponse<string, any>>;
    getConnectorSourceTemplate(requestParameters: sdk.ConnectorsV2025ApiGetConnectorSourceTemplateRequest): Promise<AxiosResponse<string, any>>;
    getConnectorTranslations(requestParameters: sdk.ConnectorsV2025ApiGetConnectorTranslationsRequest): Promise<AxiosResponse<string, any>>;
    putConnectorCorrelationConfig(requestParameters: sdk.ConnectorsV2025ApiPutConnectorCorrelationConfigRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
    putConnectorSourceConfig(requestParameters: sdk.ConnectorsV2025ApiPutConnectorSourceConfigRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
    putConnectorSourceTemplate(requestParameters: sdk.ConnectorsV2025ApiPutConnectorSourceTemplateRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
    putConnectorTranslations(requestParameters: sdk.ConnectorsV2025ApiPutConnectorTranslationsRequest): Promise<AxiosResponse<sdk.UpdateDetailV2025, any>>;
    updateConnector(requestParameters: sdk.ConnectorsV2025ApiUpdateConnectorRequest): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>>;
    createFormDefinition(requestParameters?: sdk.CustomFormsV2025ApiCreateFormDefinitionRequest): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>>;
    createFormDefinitionDynamicSchema(requestParameters?: sdk.CustomFormsV2025ApiCreateFormDefinitionDynamicSchemaRequest): Promise<AxiosResponse<sdk.FormDefinitionDynamicSchemaResponseV2025, any>>;
    createFormDefinitionFileRequest(requestParameters: sdk.CustomFormsV2025ApiCreateFormDefinitionFileRequestRequest): Promise<AxiosResponse<sdk.FormDefinitionFileUploadResponseV2025, any>>;
    createFormInstance(requestParameters?: sdk.CustomFormsV2025ApiCreateFormInstanceRequest): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>>;
    deleteFormDefinition(requestParameters: sdk.CustomFormsV2025ApiDeleteFormDefinitionRequest): Promise<AxiosResponse<object, any>>;
    exportFormDefinitionsByTenant(requestParameters?: sdk.CustomFormsV2025ApiExportFormDefinitionsByTenantRequest): Promise<AxiosResponse<Array<sdk.ExportFormDefinitionsByTenant200ResponseInnerV2025>, any>>;
    getFileFromS3(requestParameters: sdk.CustomFormsV2025ApiGetFileFromS3Request): Promise<AxiosResponse<File, any>>;
    getFormDefinitionByKey(requestParameters: sdk.CustomFormsV2025ApiGetFormDefinitionByKeyRequest): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>>;
    getFormInstanceByKey(requestParameters: sdk.CustomFormsV2025ApiGetFormInstanceByKeyRequest): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>>;
    getFormInstanceFile(requestParameters: sdk.CustomFormsV2025ApiGetFormInstanceFileRequest): Promise<AxiosResponse<File, any>>;
    importFormDefinitions(requestParameters?: sdk.CustomFormsV2025ApiImportFormDefinitionsRequest): Promise<AxiosResponse<sdk.ImportFormDefinitions202ResponseV2025, any>>;
    patchFormDefinition(requestParameters: sdk.CustomFormsV2025ApiPatchFormDefinitionRequest): Promise<AxiosResponse<sdk.FormDefinitionResponseV2025, any>>;
    patchFormInstance(requestParameters: sdk.CustomFormsV2025ApiPatchFormInstanceRequest): Promise<AxiosResponse<sdk.FormInstanceResponseV2025, any>>;
    searchFormDefinitionsByTenant(requestParameters?: sdk.CustomFormsV2025ApiSearchFormDefinitionsByTenantRequest): Promise<AxiosResponse<sdk.ListFormDefinitionsByTenantResponseV2025, any>>;
    searchFormElementDataByElementID(requestParameters: sdk.CustomFormsV2025ApiSearchFormElementDataByElementIDRequest): Promise<AxiosResponse<sdk.ListFormElementDataByElementIDResponseV2025, any>>;
    searchFormInstancesByTenant(): Promise<AxiosResponse<Array<sdk.ListFormInstancesByTenantResponseV2025>, any>>;
    searchPreDefinedSelectOptions(): Promise<AxiosResponse<sdk.ListPredefinedSelectOptionsResponseV2025, any>>;
    showPreviewDataSource(requestParameters: sdk.CustomFormsV2025ApiShowPreviewDataSourceRequest): Promise<AxiosResponse<sdk.PreviewDataSourceResponseV2025, any>>;
    createCustomPasswordInstructions(requestParameters: sdk.CustomPasswordInstructionsV2025ApiCreateCustomPasswordInstructionsRequest): Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>>;
    deleteCustomPasswordInstructions(requestParameters: sdk.CustomPasswordInstructionsV2025ApiDeleteCustomPasswordInstructionsRequest): Promise<AxiosResponse<void, any>>;
    getCustomPasswordInstructions(requestParameters: sdk.CustomPasswordInstructionsV2025ApiGetCustomPasswordInstructionsRequest): Promise<AxiosResponse<sdk.CustomPasswordInstructionV2025, any>>;
    createDataSegment(requestParameters: sdk.DataSegmentationV2025ApiCreateDataSegmentRequest): Promise<AxiosResponse<sdk.DataSegmentV2025, any>>;
    deleteDataSegment(requestParameters: sdk.DataSegmentationV2025ApiDeleteDataSegmentRequest): Promise<AxiosResponse<void, any>>;
    getDataSegment(requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentRequest): Promise<AxiosResponse<sdk.DataSegmentV2025, any>>;
    getDataSegmentIdentityMembership(requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentIdentityMembershipRequest): Promise<AxiosResponse<object, any>>;
    getDataSegmentationEnabledForUser(requestParameters: sdk.DataSegmentationV2025ApiGetDataSegmentationEnabledForUserRequest): Promise<AxiosResponse<boolean, any>>;
    listDataSegments(requestParameters?: sdk.DataSegmentationV2025ApiListDataSegmentsRequest): Promise<AxiosResponse<Array<sdk.DataSegmentV2025>, any>>;
    patchDataSegment(requestParameters: sdk.DataSegmentationV2025ApiPatchDataSegmentRequest): Promise<AxiosResponse<sdk.DataSegmentV2025, any>>;
    publishDataSegment(requestParameters: sdk.DataSegmentationV2025ApiPublishDataSegmentRequest): Promise<AxiosResponse<void, any>>;
    createDimension(requestParameters: sdk.DimensionsV2025ApiCreateDimensionRequest): Promise<AxiosResponse<sdk.DimensionV2025, any>>;
    deleteBulkDimensions(requestParameters: sdk.DimensionsV2025ApiDeleteBulkDimensionsRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>>;
    deleteDimension(requestParameters: sdk.DimensionsV2025ApiDeleteDimensionRequest): Promise<AxiosResponse<void, any>>;
    getDimension(requestParameters: sdk.DimensionsV2025ApiGetDimensionRequest): Promise<AxiosResponse<sdk.DimensionV2025, any>>;
    getDimensionEntitlements(requestParameters: sdk.DimensionsV2025ApiGetDimensionEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
    listDimensionAccessProfiles(requestParameters: sdk.DimensionsV2025ApiListDimensionAccessProfilesRequest): Promise<AxiosResponse<Array<sdk.AccessProfileV2025>, any>>;
    listDimensions(requestParameters: sdk.DimensionsV2025ApiListDimensionsRequest): Promise<AxiosResponse<Array<sdk.DimensionV2025>, any>>;
    patchDimension(requestParameters: sdk.DimensionsV2025ApiPatchDimensionRequest): Promise<AxiosResponse<sdk.DimensionV2025, any>>;
    createAccessModelMetadataForEntitlement(requestParameters: sdk.EntitlementsV2025ApiCreateAccessModelMetadataForEntitlementRequest): Promise<AxiosResponse<sdk.EntitlementV2025, any>>;
    deleteAccessModelMetadataFromEntitlement(requestParameters: sdk.EntitlementsV2025ApiDeleteAccessModelMetadataFromEntitlementRequest): Promise<AxiosResponse<void, any>>;
    getEntitlement(requestParameters: sdk.EntitlementsV2025ApiGetEntitlementRequest): Promise<AxiosResponse<sdk.EntitlementV2025, any>>;
    getEntitlementRequestConfig(requestParameters: sdk.EntitlementsV2025ApiGetEntitlementRequestConfigRequest): Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>>;
    importEntitlementsBySource(requestParameters: sdk.EntitlementsV2025ApiImportEntitlementsBySourceRequest): Promise<AxiosResponse<sdk.LoadEntitlementTaskV2025, any>>;
    listEntitlementChildren(requestParameters: sdk.EntitlementsV2025ApiListEntitlementChildrenRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
    listEntitlementParents(requestParameters: sdk.EntitlementsV2025ApiListEntitlementParentsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
    listEntitlements(requestParameters?: sdk.EntitlementsV2025ApiListEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
    patchEntitlement(requestParameters: sdk.EntitlementsV2025ApiPatchEntitlementRequest): Promise<AxiosResponse<sdk.EntitlementV2025, any>>;
    putEntitlementRequestConfig(requestParameters: sdk.EntitlementsV2025ApiPutEntitlementRequestConfigRequest): Promise<AxiosResponse<sdk.EntitlementRequestConfigV2025, any>>;
    resetSourceEntitlements(requestParameters: sdk.EntitlementsV2025ApiResetSourceEntitlementsRequest): Promise<AxiosResponse<sdk.EntitlementSourceResetBaseReferenceDtoV2025, any>>;
    updateEntitlementsInBulk(requestParameters: sdk.EntitlementsV2025ApiUpdateEntitlementsInBulkRequest): Promise<AxiosResponse<void, any>>;
    createAuthOrgNetworkConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiCreateAuthOrgNetworkConfigRequest): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>>;
    getAuthOrgLockoutConfig(): Promise<AxiosResponse<sdk.LockoutConfigurationV2025, any>>;
    getAuthOrgNetworkConfig(): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>>;
    getAuthOrgServiceProviderConfig(): Promise<AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>>;
    getAuthOrgSessionConfig(): Promise<AxiosResponse<sdk.SessionConfigurationV2025, any>>;
    patchAuthOrgLockoutConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgLockoutConfigRequest): Promise<AxiosResponse<sdk.LockoutConfigurationV2025, any>>;
    patchAuthOrgNetworkConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgNetworkConfigRequest): Promise<AxiosResponse<sdk.NetworkConfigurationV2025, any>>;
    patchAuthOrgServiceProviderConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgServiceProviderConfigRequest): Promise<AxiosResponse<sdk.ServiceProviderConfigurationV2025, any>>;
    patchAuthOrgSessionConfig(requestParameters: sdk.GlobalTenantSecuritySettingsV2025ApiPatchAuthOrgSessionConfigRequest): Promise<AxiosResponse<sdk.SessionConfigurationV2025, any>>;
    createWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiCreateWorkgroupRequest): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>>;
    deleteWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupRequest): Promise<AxiosResponse<void, any>>;
    deleteWorkgroupMembers(requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupMembersRequest): Promise<AxiosResponse<Array<sdk.WorkgroupMemberDeleteItemV2025>, any>>;
    deleteWorkgroupsInBulk(requestParameters: sdk.GovernanceGroupsV2025ApiDeleteWorkgroupsInBulkRequest): Promise<AxiosResponse<Array<sdk.WorkgroupDeleteItemV2025>, any>>;
    getWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiGetWorkgroupRequest): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>>;
    listConnections(requestParameters: sdk.GovernanceGroupsV2025ApiListConnectionsRequest): Promise<AxiosResponse<Array<sdk.WorkgroupConnectionDtoV2025>, any>>;
    listWorkgroupMembers(requestParameters: sdk.GovernanceGroupsV2025ApiListWorkgroupMembersRequest): Promise<AxiosResponse<Array<sdk.ListWorkgroupMembers200ResponseInnerV2025>, any>>;
    listWorkgroups(requestParameters?: sdk.GovernanceGroupsV2025ApiListWorkgroupsRequest): Promise<AxiosResponse<Array<sdk.WorkgroupDtoV2025>, any>>;
    patchWorkgroup(requestParameters: sdk.GovernanceGroupsV2025ApiPatchWorkgroupRequest): Promise<AxiosResponse<sdk.WorkgroupDtoV2025, any>>;
    updateWorkgroupMembers(requestParameters: sdk.GovernanceGroupsV2025ApiUpdateWorkgroupMembersRequest): Promise<AxiosResponse<Array<sdk.WorkgroupMemberAddItemV2025>, any>>;
    addAccessRequestRecommendationsIgnoredItem(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsIgnoredItemRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>>;
    addAccessRequestRecommendationsRequestedItem(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsRequestedItemRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>>;
    addAccessRequestRecommendationsViewedItem(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationActionItemResponseDtoV2025, any>>;
    addAccessRequestRecommendationsViewedItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiAddAccessRequestRecommendationsViewedItemsRequest): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>>;
    getAccessRequestRecommendations(requestParameters?: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequest): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationItemDetailV2025>, any>>;
    getAccessRequestRecommendationsConfig(requestParameters?: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsConfigRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>>;
    getAccessRequestRecommendationsIgnoredItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsIgnoredItemsRequest): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>>;
    getAccessRequestRecommendationsRequestedItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsRequestedItemsRequest): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>>;
    getAccessRequestRecommendationsViewedItems(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiGetAccessRequestRecommendationsViewedItemsRequest): Promise<AxiosResponse<Array<sdk.AccessRequestRecommendationActionItemResponseDtoV2025>, any>>;
    setAccessRequestRecommendationsConfig(requestParameters: sdk.IAIAccessRequestRecommendationsV2025ApiSetAccessRequestRecommendationsConfigRequest): Promise<AxiosResponse<sdk.AccessRequestRecommendationConfigDtoV2025, any>>;
    createCommonAccess(requestParameters: sdk.IAICommonAccessV2025ApiCreateCommonAccessRequest): Promise<AxiosResponse<sdk.CommonAccessItemResponseV2025, any>>;
    getCommonAccess(requestParameters?: sdk.IAICommonAccessV2025ApiGetCommonAccessRequest): Promise<AxiosResponse<Array<sdk.CommonAccessResponseV2025>, any>>;
    updateCommonAccessStatusInBulk(requestParameters: sdk.IAICommonAccessV2025ApiUpdateCommonAccessStatusInBulkRequest): Promise<AxiosResponse<object, any>>;
    exportOutliersZip(requestParameters?: sdk.IAIOutliersV2025ApiExportOutliersZipRequest): Promise<AxiosResponse<File, any>>;
    getIdentityOutlierSnapshots(requestParameters?: sdk.IAIOutliersV2025ApiGetIdentityOutlierSnapshotsRequest): Promise<AxiosResponse<Array<sdk.OutlierSummaryV2025>, any>>;
    getIdentityOutliers(requestParameters?: sdk.IAIOutliersV2025ApiGetIdentityOutliersRequest): Promise<AxiosResponse<Array<sdk.OutlierV2025>, any>>;
    getLatestIdentityOutlierSnapshots(requestParameters?: sdk.IAIOutliersV2025ApiGetLatestIdentityOutlierSnapshotsRequest): Promise<AxiosResponse<Array<sdk.LatestOutlierSummaryV2025>, any>>;
    getOutlierContributingFeatureSummary(requestParameters: sdk.IAIOutliersV2025ApiGetOutlierContributingFeatureSummaryRequest): Promise<AxiosResponse<sdk.OutlierFeatureSummaryV2025, any>>;
    getPeerGroupOutliersContributingFeatures(requestParameters: sdk.IAIOutliersV2025ApiGetPeerGroupOutliersContributingFeaturesRequest): Promise<AxiosResponse<Array<sdk.OutlierContributingFeatureV2025>, any>>;
    ignoreIdentityOutliers(requestParameters: sdk.IAIOutliersV2025ApiIgnoreIdentityOutliersRequest): Promise<AxiosResponse<void, any>>;
    listOutliersContributingFeatureAccessItems(requestParameters: sdk.IAIOutliersV2025ApiListOutliersContributingFeatureAccessItemsRequest): Promise<AxiosResponse<Array<sdk.OutliersContributingFeatureAccessItemsV2025>, any>>;
    unIgnoreIdentityOutliers(requestParameters: sdk.IAIOutliersV2025ApiUnIgnoreIdentityOutliersRequest): Promise<AxiosResponse<void, any>>;
    getPeerGroupOutliers(requestParameters: sdk.IAIPeerGroupStrategiesV2025ApiGetPeerGroupOutliersRequest): Promise<AxiosResponse<Array<sdk.PeerGroupMemberV2025>, any>>;
    getRecommendations(requestParameters: sdk.IAIRecommendationsV2025ApiGetRecommendationsRequest): Promise<AxiosResponse<sdk.RecommendationResponseDtoV2025, any>>;
    getRecommendationsConfig(requestParameters?: sdk.IAIRecommendationsV2025ApiGetRecommendationsConfigRequest): Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>>;
    updateRecommendationsConfig(requestParameters: sdk.IAIRecommendationsV2025ApiUpdateRecommendationsConfigRequest): Promise<AxiosResponse<sdk.RecommendationConfigDtoV2025, any>>;
    createPotentialRoleProvisionRequest(requestParameters: sdk.IAIRoleMiningV2025ApiCreatePotentialRoleProvisionRequestRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleSummaryV2025, any>>;
    createRoleMiningSessions(requestParameters: sdk.IAIRoleMiningV2025ApiCreateRoleMiningSessionsRequest): Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>>;
    downloadRoleMiningPotentialRoleZip(requestParameters: sdk.IAIRoleMiningV2025ApiDownloadRoleMiningPotentialRoleZipRequest): Promise<AxiosResponse<File, any>>;
    exportRoleMiningPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleRequest): Promise<AxiosResponse<File, any>>;
    exportRoleMiningPotentialRoleAsync(requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleAsyncRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>>;
    exportRoleMiningPotentialRoleStatus(requestParameters: sdk.IAIRoleMiningV2025ApiExportRoleMiningPotentialRoleStatusRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleExportResponseV2025, any>>;
    getAllPotentialRoleSummaries(requestParameters?: sdk.IAIRoleMiningV2025ApiGetAllPotentialRoleSummariesRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>>;
    getEntitlementDistributionPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetEntitlementDistributionPotentialRoleRequest): Promise<AxiosResponse<{
        [key: string]: number;
    }, any>>;
    getEntitlementsPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetEntitlementsPotentialRoleRequest): Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>>;
    getExcludedEntitlementsPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetExcludedEntitlementsPotentialRoleRequest): Promise<AxiosResponse<Array<sdk.RoleMiningEntitlementV2025>, any>>;
    getIdentitiesPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetIdentitiesPotentialRoleRequest): Promise<AxiosResponse<Array<sdk.RoleMiningIdentityV2025>, any>>;
    getPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>>;
    getPotentialRoleApplications(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleApplicationsRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleApplicationV2025>, any>>;
    getPotentialRoleEntitlements(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleEntitlementsRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleEntitlementsV2025>, any>>;
    getPotentialRoleSourceIdentityUsage(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleSourceIdentityUsageRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSourceUsageV2025>, any>>;
    getPotentialRoleSummaries(requestParameters: sdk.IAIRoleMiningV2025ApiGetPotentialRoleSummariesRequest): Promise<AxiosResponse<Array<sdk.RoleMiningPotentialRoleSummaryV2025>, any>>;
    getRoleMiningPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningPotentialRoleRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>>;
    getRoleMiningSession(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionRequest): Promise<AxiosResponse<sdk.RoleMiningSessionResponseV2025, any>>;
    getRoleMiningSessionStatus(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionStatusRequest): Promise<AxiosResponse<sdk.RoleMiningSessionStatusV2025, any>>;
    getRoleMiningSessions(requestParameters: sdk.IAIRoleMiningV2025ApiGetRoleMiningSessionsRequest): Promise<AxiosResponse<Array<sdk.RoleMiningSessionDtoV2025>, any>>;
    getSavedPotentialRoles(requestParameters?: sdk.IAIRoleMiningV2025ApiGetSavedPotentialRolesRequest): Promise<AxiosResponse<Array<sdk.RoleMiningSessionDraftRoleDtoV2025>, any>>;
    patchPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiPatchPotentialRoleRequest): Promise<AxiosResponse<object, any>>;
    patchPotentialRole_1(requestParameters: sdk.IAIRoleMiningV2025ApiPatchPotentialRole0Request): Promise<AxiosResponse<object, any>>;
    patchRoleMiningSession(requestParameters: sdk.IAIRoleMiningV2025ApiPatchRoleMiningSessionRequest): Promise<AxiosResponse<object, any>>;
    updateEntitlementsPotentialRole(requestParameters: sdk.IAIRoleMiningV2025ApiUpdateEntitlementsPotentialRoleRequest): Promise<AxiosResponse<sdk.RoleMiningPotentialRoleV2025, any>>;
    deleteIcon(requestParameters: sdk.IconsV2025ApiDeleteIconRequest): Promise<AxiosResponse<void, any>>;
    setIcon(requestParameters: sdk.IconsV2025ApiSetIconRequest): Promise<AxiosResponse<sdk.SetIcon200ResponseV2025, any>>;
    deleteIdentity(requestParameters: sdk.IdentitiesV2025ApiDeleteIdentityRequest): Promise<AxiosResponse<void, any>>;
    getIdentity(requestParameters: sdk.IdentitiesV2025ApiGetIdentityRequest): Promise<AxiosResponse<sdk.IdentityV2025, any>>;
    getIdentityOwnershipDetails(requestParameters: sdk.IdentitiesV2025ApiGetIdentityOwnershipDetailsRequest): Promise<AxiosResponse<sdk.IdentityOwnershipAssociationDetailsV2025, any>>;
    getRoleAssignment(requestParameters: sdk.IdentitiesV2025ApiGetRoleAssignmentRequest): Promise<AxiosResponse<sdk.RoleAssignmentDtoV2025, any>>;
    getRoleAssignments(requestParameters: sdk.IdentitiesV2025ApiGetRoleAssignmentsRequest): Promise<AxiosResponse<Array<sdk.GetRoleAssignments200ResponseInnerV2025>, any>>;
    listIdentities(requestParameters?: sdk.IdentitiesV2025ApiListIdentitiesRequest): Promise<AxiosResponse<Array<sdk.IdentityV2025>, any>>;
    resetIdentity(requestParameters: sdk.IdentitiesV2025ApiResetIdentityRequest): Promise<AxiosResponse<void, any>>;
    sendIdentityVerificationAccountToken(requestParameters: sdk.IdentitiesV2025ApiSendIdentityVerificationAccountTokenRequest): Promise<AxiosResponse<void, any>>;
    startIdentitiesInvite(requestParameters: sdk.IdentitiesV2025ApiStartIdentitiesInviteRequest): Promise<AxiosResponse<sdk.TaskStatusV2025, any>>;
    startIdentityProcessing(requestParameters: sdk.IdentitiesV2025ApiStartIdentityProcessingRequest): Promise<AxiosResponse<sdk.TaskResultResponseV2025, any>>;
    synchronizeAttributesForIdentity(requestParameters: sdk.IdentitiesV2025ApiSynchronizeAttributesForIdentityRequest): Promise<AxiosResponse<sdk.IdentitySyncJobV2025, any>>;
    createIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiCreateIdentityAttributeRequest): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>>;
    deleteIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiDeleteIdentityAttributeRequest): Promise<AxiosResponse<void, any>>;
    deleteIdentityAttributesInBulk(requestParameters: sdk.IdentityAttributesV2025ApiDeleteIdentityAttributesInBulkRequest): Promise<AxiosResponse<void, any>>;
    getIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiGetIdentityAttributeRequest): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>>;
    listIdentityAttributes(requestParameters?: sdk.IdentityAttributesV2025ApiListIdentityAttributesRequest): Promise<AxiosResponse<Array<sdk.IdentityAttributeV2025>, any>>;
    putIdentityAttribute(requestParameters: sdk.IdentityAttributesV2025ApiPutIdentityAttributeRequest): Promise<AxiosResponse<sdk.IdentityAttributeV2025, any>>;
    compareIdentitySnapshots(requestParameters: sdk.IdentityHistoryV2025ApiCompareIdentitySnapshotsRequest): Promise<AxiosResponse<Array<sdk.IdentityCompareResponseV2025>, any>>;
    compareIdentitySnapshotsAccessType(requestParameters: sdk.IdentityHistoryV2025ApiCompareIdentitySnapshotsAccessTypeRequest): Promise<AxiosResponse<Array<sdk.AccessItemDiffV2025>, any>>;
    getHistoricalIdentity(requestParameters: sdk.IdentityHistoryV2025ApiGetHistoricalIdentityRequest): Promise<AxiosResponse<sdk.IdentityHistoryResponseV2025, any>>;
    getHistoricalIdentityEvents(requestParameters: sdk.IdentityHistoryV2025ApiGetHistoricalIdentityEventsRequest): Promise<AxiosResponse<Array<sdk.GetHistoricalIdentityEvents200ResponseInnerV2025>, any>>;
    getIdentitySnapshot(requestParameters: sdk.IdentityHistoryV2025ApiGetIdentitySnapshotRequest): Promise<AxiosResponse<sdk.IdentityHistoryResponseV2025, any>>;
    getIdentitySnapshotSummary(requestParameters: sdk.IdentityHistoryV2025ApiGetIdentitySnapshotSummaryRequest): Promise<AxiosResponse<Array<sdk.MetricResponseV2025>, any>>;
    getIdentityStartDate(requestParameters: sdk.IdentityHistoryV2025ApiGetIdentityStartDateRequest): Promise<AxiosResponse<string, any>>;
    listHistoricalIdentities(requestParameters?: sdk.IdentityHistoryV2025ApiListHistoricalIdentitiesRequest): Promise<AxiosResponse<Array<sdk.IdentityListItemV2025>, any>>;
    listIdentityAccessItems(requestParameters: sdk.IdentityHistoryV2025ApiListIdentityAccessItemsRequest): Promise<AxiosResponse<Array<sdk.ListIdentityAccessItems200ResponseInnerV2025>, any>>;
    listIdentitySnapshotAccessItems(requestParameters: sdk.IdentityHistoryV2025ApiListIdentitySnapshotAccessItemsRequest): Promise<AxiosResponse<Array<sdk.ListIdentityAccessItems200ResponseInnerV2025>, any>>;
    listIdentitySnapshots(requestParameters: sdk.IdentityHistoryV2025ApiListIdentitySnapshotsRequest): Promise<AxiosResponse<Array<sdk.IdentitySnapshotSummaryResponseV2025>, any>>;
    createIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiCreateIdentityProfileRequest): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>>;
    deleteIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiDeleteIdentityProfileRequest): Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>>;
    deleteIdentityProfiles(requestParameters: sdk.IdentityProfilesV2025ApiDeleteIdentityProfilesRequest): Promise<AxiosResponse<sdk.TaskResultSimplifiedV2025, any>>;
    exportIdentityProfiles(requestParameters?: sdk.IdentityProfilesV2025ApiExportIdentityProfilesRequest): Promise<AxiosResponse<Array<sdk.IdentityProfileExportedObjectV2025>, any>>;
    generateIdentityPreview(requestParameters: sdk.IdentityProfilesV2025ApiGenerateIdentityPreviewRequest): Promise<AxiosResponse<sdk.IdentityPreviewResponseV2025, any>>;
    getDefaultIdentityAttributeConfig(requestParameters: sdk.IdentityProfilesV2025ApiGetDefaultIdentityAttributeConfigRequest): Promise<AxiosResponse<sdk.IdentityAttributeConfigV2025, any>>;
    getIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiGetIdentityProfileRequest): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>>;
    importIdentityProfiles(requestParameters: sdk.IdentityProfilesV2025ApiImportIdentityProfilesRequest): Promise<AxiosResponse<sdk.ObjectImportResultV2025, any>>;
    listIdentityProfiles(requestParameters?: sdk.IdentityProfilesV2025ApiListIdentityProfilesRequest): Promise<AxiosResponse<Array<sdk.IdentityProfileV2025>, any>>;
    syncIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiSyncIdentityProfileRequest): Promise<AxiosResponse<object, any>>;
    updateIdentityProfile(requestParameters: sdk.IdentityProfilesV2025ApiUpdateIdentityProfileRequest): Promise<AxiosResponse<sdk.IdentityProfileV2025, any>>;
    createLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiCreateLifecycleStateRequest): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>>;
    deleteLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiDeleteLifecycleStateRequest): Promise<AxiosResponse<sdk.LifecyclestateDeletedV2025, any>>;
    getLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiGetLifecycleStateRequest): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>>;
    getLifecycleStates(requestParameters: sdk.LifecycleStatesV2025ApiGetLifecycleStatesRequest): Promise<AxiosResponse<Array<sdk.LifecycleStateV2025>, any>>;
    setLifecycleState(requestParameters: sdk.LifecycleStatesV2025ApiSetLifecycleStateRequest): Promise<AxiosResponse<sdk.SetLifecycleState200ResponseV2025, any>>;
    updateLifecycleStates(requestParameters: sdk.LifecycleStatesV2025ApiUpdateLifecycleStatesRequest): Promise<AxiosResponse<sdk.LifecycleStateV2025, any>>;
    getMFADuoConfig(): Promise<AxiosResponse<sdk.MfaDuoConfigV2025, any>>;
    getMFAKbaConfig(requestParameters?: sdk.MFAConfigurationV2025ApiGetMFAKbaConfigRequest): Promise<AxiosResponse<Array<sdk.KbaQuestionV2025>, any>>;
    getMFAOktaConfig(): Promise<AxiosResponse<sdk.MfaOktaConfigV2025, any>>;
    setMFADuoConfig(requestParameters: sdk.MFAConfigurationV2025ApiSetMFADuoConfigRequest): Promise<AxiosResponse<sdk.MfaDuoConfigV2025, any>>;
    setMFAKBAConfig(requestParameters: sdk.MFAConfigurationV2025ApiSetMFAKBAConfigRequest): Promise<AxiosResponse<Array<sdk.KbaAnswerResponseItemV2025>, any>>;
    setMFAOktaConfig(requestParameters: sdk.MFAConfigurationV2025ApiSetMFAOktaConfigRequest): Promise<AxiosResponse<sdk.MfaOktaConfigV2025, any>>;
    testMFAConfig(requestParameters: sdk.MFAConfigurationV2025ApiTestMFAConfigRequest): Promise<AxiosResponse<sdk.MfaConfigTestResponseV2025, any>>;
    sendClassifyMachineAccount(requestParameters: sdk.MachineAccountClassifyV2025ApiSendClassifyMachineAccountRequest): Promise<AxiosResponse<sdk.SendClassifyMachineAccount200ResponseV2025, any>>;
    createMachineAccountMappings(requestParameters: sdk.MachineAccountMappingsV2025ApiCreateMachineAccountMappingsRequest): Promise<AxiosResponse<Array<sdk.AttributeMappingsV2025>, any>>;
    deleteMachineAccountMappings(requestParameters: sdk.MachineAccountMappingsV2025ApiDeleteMachineAccountMappingsRequest): Promise<AxiosResponse<void, any>>;
    listMachineAccountMappings(requestParameters: sdk.MachineAccountMappingsV2025ApiListMachineAccountMappingsRequest): Promise<AxiosResponse<Array<sdk.AttributeMappingsV2025>, any>>;
    setMachineAccountMappings(requestParameters: sdk.MachineAccountMappingsV2025ApiSetMachineAccountMappingsRequest): Promise<AxiosResponse<Array<sdk.AttributeMappingsV2025>, any>>;
    getMachineAccount(requestParameters: sdk.MachineAccountsV2025ApiGetMachineAccountRequest): Promise<AxiosResponse<sdk.MachineAccountV2025, any>>;
    listMachineAccounts(requestParameters?: sdk.MachineAccountsV2025ApiListMachineAccountsRequest): Promise<AxiosResponse<Array<sdk.MachineAccountV2025>, any>>;
    updateMachineAccount(requestParameters: sdk.MachineAccountsV2025ApiUpdateMachineAccountRequest): Promise<AxiosResponse<sdk.MachineAccountV2025, any>>;
    deleteMachineClassificationConfig(requestParameters: sdk.MachineClassificationConfigV2025ApiDeleteMachineClassificationConfigRequest): Promise<AxiosResponse<void, any>>;
    getMachineClassificationConfig(requestParameters: sdk.MachineClassificationConfigV2025ApiGetMachineClassificationConfigRequest): Promise<AxiosResponse<sdk.MachineClassificationConfigV2025, any>>;
    setMachineClassificationConfig(requestParameters: sdk.MachineClassificationConfigV2025ApiSetMachineClassificationConfigRequest): Promise<AxiosResponse<sdk.MachineClassificationConfigV2025, any>>;
    createMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiCreateMachineIdentityRequest): Promise<AxiosResponse<sdk.MachineIdentityV2025, any>>;
    deleteMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiDeleteMachineIdentityRequest): Promise<AxiosResponse<void, any>>;
    getMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiGetMachineIdentityRequest): Promise<AxiosResponse<sdk.MachineIdentityV2025, any>>;
    listMachineIdentities(requestParameters?: sdk.MachineIdentitiesV2025ApiListMachineIdentitiesRequest): Promise<AxiosResponse<Array<sdk.MachineIdentityV2025>, any>>;
    updateMachineIdentity(requestParameters: sdk.MachineIdentitiesV2025ApiUpdateMachineIdentityRequest): Promise<AxiosResponse<sdk.MachineIdentityV2025, any>>;
    createManagedClient(requestParameters: sdk.ManagedClientsV2025ApiCreateManagedClientRequest): Promise<AxiosResponse<sdk.ManagedClientV2025, any>>;
    deleteManagedClient(requestParameters: sdk.ManagedClientsV2025ApiDeleteManagedClientRequest): Promise<AxiosResponse<void, any>>;
    getManagedClient(requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientRequest): Promise<AxiosResponse<sdk.ManagedClientV2025, any>>;
    getManagedClientStatus(requestParameters: sdk.ManagedClientsV2025ApiGetManagedClientStatusRequest): Promise<AxiosResponse<sdk.ManagedClientStatusV2025, any>>;
    getManagedClients(requestParameters?: sdk.ManagedClientsV2025ApiGetManagedClientsRequest): Promise<AxiosResponse<Array<sdk.ManagedClientV2025>, any>>;
    updateManagedClient(requestParameters: sdk.ManagedClientsV2025ApiUpdateManagedClientRequest): Promise<AxiosResponse<sdk.ManagedClientV2025, any>>;
    createManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiCreateManagedClusterTypeRequest): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>>;
    deleteManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiDeleteManagedClusterTypeRequest): Promise<AxiosResponse<void, any>>;
    getManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiGetManagedClusterTypeRequest): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>>;
    getManagedClusterTypes(requestParameters?: sdk.ManagedClusterTypesV2025ApiGetManagedClusterTypesRequest): Promise<AxiosResponse<Array<sdk.ManagedClusterTypeV2025>, any>>;
    updateManagedClusterType(requestParameters: sdk.ManagedClusterTypesV2025ApiUpdateManagedClusterTypeRequest): Promise<AxiosResponse<sdk.ManagedClusterTypeV2025, any>>;
    createManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiCreateManagedClusterRequest): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>>;
    deleteManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiDeleteManagedClusterRequest): Promise<AxiosResponse<void, any>>;
    getClientLogConfiguration(requestParameters: sdk.ManagedClustersV2025ApiGetClientLogConfigurationRequest): Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>>;
    getManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiGetManagedClusterRequest): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>>;
    getManagedClusters(requestParameters?: sdk.ManagedClustersV2025ApiGetManagedClustersRequest): Promise<AxiosResponse<Array<sdk.ManagedClusterV2025>, any>>;
    putClientLogConfiguration(requestParameters: sdk.ManagedClustersV2025ApiPutClientLogConfigurationRequest): Promise<AxiosResponse<sdk.ClientLogConfigurationV2025, any>>;
    update(requestParameters: sdk.ManagedClustersV2025ApiUpdateRequest): Promise<AxiosResponse<sdk.ClusterManualUpgradeV2025, any>>;
    updateManagedCluster(requestParameters: sdk.ManagedClustersV2025ApiUpdateManagedClusterRequest): Promise<AxiosResponse<sdk.ManagedClusterV2025, any>>;
    createMultiHostIntegration(requestParameters: sdk.MultiHostIntegrationV2025ApiCreateMultiHostIntegrationRequest): Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>>;
    createSourcesWithinMultiHost(requestParameters: sdk.MultiHostIntegrationV2025ApiCreateSourcesWithinMultiHostRequest): Promise<AxiosResponse<void, any>>;
    deleteMultiHost(requestParameters: sdk.MultiHostIntegrationV2025ApiDeleteMultiHostRequest): Promise<AxiosResponse<void, any>>;
    getAcctAggregationGroups(requestParameters: sdk.MultiHostIntegrationV2025ApiGetAcctAggregationGroupsRequest): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>>;
    getEntitlementAggregationGroups(requestParameters: sdk.MultiHostIntegrationV2025ApiGetEntitlementAggregationGroupsRequest): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsAggScheduleUpdateV2025>, any>>;
    getMultiHostIntegrations(requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostIntegrationsRequest): Promise<AxiosResponse<sdk.MultiHostIntegrationsV2025, any>>;
    getMultiHostIntegrationsList(requestParameters?: sdk.MultiHostIntegrationV2025ApiGetMultiHostIntegrationsListRequest): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationsV2025>, any>>;
    getMultiHostSourceCreationErrors(requestParameters: sdk.MultiHostIntegrationV2025ApiGetMultiHostSourceCreationErrorsRequest): Promise<AxiosResponse<Array<sdk.SourceCreationErrorsV2025>, any>>;
    getMultihostIntegrationTypes(): Promise<AxiosResponse<Array<sdk.MultiHostIntegrationTemplateTypeV2025>, any>>;
    getSourcesWithinMultiHost(requestParameters: sdk.MultiHostIntegrationV2025ApiGetSourcesWithinMultiHostRequest): Promise<AxiosResponse<Array<sdk.MultiHostSourcesV2025>, any>>;
    testConnectionMultiHostSources(requestParameters: sdk.MultiHostIntegrationV2025ApiTestConnectionMultiHostSourcesRequest): Promise<AxiosResponse<void, any>>;
    testSourceConnectionMultihost(requestParameters: sdk.MultiHostIntegrationV2025ApiTestSourceConnectionMultihostRequest): Promise<AxiosResponse<sdk.TestSourceConnectionMultihost200ResponseV2025, any>>;
    updateMultiHostSources(requestParameters: sdk.MultiHostIntegrationV2025ApiUpdateMultiHostSourcesRequest): Promise<AxiosResponse<void, any>>;
    approveNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiApproveNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>>;
    createNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
    createNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>>;
    createNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceRequest): Promise<AxiosResponse<sdk.NonEmployeeSourceWithCloudExternalIdV2025, any>>;
    createNonEmployeeSourceSchemaAttributes(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiCreateNonEmployeeSourceSchemaAttributesRequest): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>>;
    deleteNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordRequest): Promise<AxiosResponse<void, any>>;
    deleteNonEmployeeRecordsInBulk(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRecordsInBulkRequest): Promise<AxiosResponse<void, any>>;
    deleteNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeRequestRequest): Promise<AxiosResponse<void, any>>;
    deleteNonEmployeeSchemaAttribute(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSchemaAttributeRequest): Promise<AxiosResponse<void, any>>;
    deleteNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceRequest): Promise<AxiosResponse<void, any>>;
    deleteNonEmployeeSourceSchemaAttributes(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiDeleteNonEmployeeSourceSchemaAttributesRequest): Promise<AxiosResponse<void, any>>;
    exportNonEmployeeRecords(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeRecordsRequest): Promise<AxiosResponse<void, any>>;
    exportNonEmployeeSourceSchemaTemplate(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiExportNonEmployeeSourceSchemaTemplateRequest): Promise<AxiosResponse<void, any>>;
    getNonEmployeeApproval(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemDetailV2025, any>>;
    getNonEmployeeApprovalSummary(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeApprovalSummaryRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalSummaryV2025, any>>;
    getNonEmployeeBulkUploadStatus(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeBulkUploadStatusRequest): Promise<AxiosResponse<sdk.NonEmployeeBulkUploadStatusV2025, any>>;
    getNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
    getNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeRequestV2025, any>>;
    getNonEmployeeRequestSummary(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeRequestSummaryRequest): Promise<AxiosResponse<sdk.NonEmployeeRequestSummaryV2025, any>>;
    getNonEmployeeSchemaAttribute(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSchemaAttributeRequest): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>>;
    getNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceRequest): Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>>;
    getNonEmployeeSourceSchemaAttributes(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiGetNonEmployeeSourceSchemaAttributesRequest): Promise<AxiosResponse<Array<sdk.NonEmployeeSchemaAttributeV2025>, any>>;
    importNonEmployeeRecordsInBulk(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiImportNonEmployeeRecordsInBulkRequest): Promise<AxiosResponse<sdk.NonEmployeeBulkUploadJobV2025, any>>;
    listNonEmployeeApprovals(requestParameters?: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeApprovalsRequest): Promise<AxiosResponse<Array<sdk.NonEmployeeApprovalItemV2025>, any>>;
    listNonEmployeeRecords(requestParameters?: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRecordsRequest): Promise<AxiosResponse<Array<sdk.NonEmployeeRecordV2025>, any>>;
    listNonEmployeeRequests(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeRequestsRequest): Promise<AxiosResponse<Array<sdk.NonEmployeeRequestV2025>, any>>;
    listNonEmployeeSources(requestParameters?: sdk.NonEmployeeLifecycleManagementV2025ApiListNonEmployeeSourcesRequest): Promise<AxiosResponse<Array<sdk.NonEmployeeSourceWithNECountV2025>, any>>;
    patchNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
    patchNonEmployeeSchemaAttribute(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSchemaAttributeRequest): Promise<AxiosResponse<sdk.NonEmployeeSchemaAttributeV2025, any>>;
    patchNonEmployeeSource(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiPatchNonEmployeeSourceRequest): Promise<AxiosResponse<sdk.NonEmployeeSourceV2025, any>>;
    rejectNonEmployeeRequest(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiRejectNonEmployeeRequestRequest): Promise<AxiosResponse<sdk.NonEmployeeApprovalItemV2025, any>>;
    updateNonEmployeeRecord(requestParameters: sdk.NonEmployeeLifecycleManagementV2025ApiUpdateNonEmployeeRecordRequest): Promise<AxiosResponse<sdk.NonEmployeeRecordV2025, any>>;
    createDomainDkim(requestParameters: sdk.NotificationsV2025ApiCreateDomainDkimRequest): Promise<AxiosResponse<sdk.DomainStatusDtoV2025, any>>;
    createNotificationTemplate(requestParameters: sdk.NotificationsV2025ApiCreateNotificationTemplateRequest): Promise<AxiosResponse<sdk.TemplateDtoV2025, any>>;
    createVerifiedFromAddress(requestParameters: sdk.NotificationsV2025ApiCreateVerifiedFromAddressRequest): Promise<AxiosResponse<sdk.EmailStatusDtoV2025, any>>;
    deleteNotificationTemplatesInBulk(requestParameters: sdk.NotificationsV2025ApiDeleteNotificationTemplatesInBulkRequest): Promise<AxiosResponse<void, any>>;
    deleteVerifiedFromAddress(requestParameters: sdk.NotificationsV2025ApiDeleteVerifiedFromAddressRequest): Promise<AxiosResponse<void, any>>;
    getDkimAttributes(requestParameters?: sdk.NotificationsV2025ApiGetDkimAttributesRequest): Promise<AxiosResponse<Array<sdk.DkimAttributesV2025>, any>>;
    getMailFromAttributes(requestParameters: sdk.NotificationsV2025ApiGetMailFromAttributesRequest): Promise<AxiosResponse<sdk.MailFromAttributesV2025, any>>;
    getNotificationTemplate(requestParameters: sdk.NotificationsV2025ApiGetNotificationTemplateRequest): Promise<AxiosResponse<sdk.TemplateDtoV2025, any>>;
    getNotificationsTemplateContext(requestParameters?: sdk.NotificationsV2025ApiGetNotificationsTemplateContextRequest): Promise<AxiosResponse<sdk.NotificationTemplateContextV2025, any>>;
    listFromAddresses(requestParameters?: sdk.NotificationsV2025ApiListFromAddressesRequest): Promise<AxiosResponse<Array<sdk.EmailStatusDtoV2025>, any>>;
    listNotificationPreferences(requestParameters?: sdk.NotificationsV2025ApiListNotificationPreferencesRequest): Promise<AxiosResponse<sdk.PreferencesDtoV2025, any>>;
    listNotificationTemplateDefaults(requestParameters?: sdk.NotificationsV2025ApiListNotificationTemplateDefaultsRequest): Promise<AxiosResponse<Array<sdk.TemplateDtoDefaultV2025>, any>>;
    listNotificationTemplates(requestParameters?: sdk.NotificationsV2025ApiListNotificationTemplatesRequest): Promise<AxiosResponse<Array<sdk.TemplateDtoV2025>, any>>;
    putMailFromAttributes(requestParameters: sdk.NotificationsV2025ApiPutMailFromAttributesRequest): Promise<AxiosResponse<sdk.MailFromAttributesV2025, any>>;
    sendTestNotification(requestParameters: sdk.NotificationsV2025ApiSendTestNotificationRequest): Promise<AxiosResponse<void, any>>;
    createOauthClient(requestParameters: sdk.OAuthClientsV2025ApiCreateOauthClientRequest): Promise<AxiosResponse<sdk.CreateOAuthClientResponseV2025, any>>;
    deleteOauthClient(requestParameters: sdk.OAuthClientsV2025ApiDeleteOauthClientRequest): Promise<AxiosResponse<void, any>>;
    getOauthClient(requestParameters: sdk.OAuthClientsV2025ApiGetOauthClientRequest): Promise<AxiosResponse<sdk.GetOAuthClientResponseV2025, any>>;
    listOauthClients(requestParameters?: sdk.OAuthClientsV2025ApiListOauthClientsRequest): Promise<AxiosResponse<Array<sdk.GetOAuthClientResponseV2025>, any>>;
    patchOauthClient(requestParameters: sdk.OAuthClientsV2025ApiPatchOauthClientRequest): Promise<AxiosResponse<sdk.GetOAuthClientResponseV2025, any>>;
    getOrgConfig(): Promise<AxiosResponse<sdk.OrgConfigV2025, any>>;
    getValidTimeZones(requestParameters?: sdk.OrgConfigV2025ApiGetValidTimeZonesRequest): Promise<AxiosResponse<Array<string>, any>>;
    patchOrgConfig(requestParameters: sdk.OrgConfigV2025ApiPatchOrgConfigRequest): Promise<AxiosResponse<sdk.OrgConfigV2025, any>>;
    createPasswordOrgConfig(requestParameters: sdk.PasswordConfigurationV2025ApiCreatePasswordOrgConfigRequest): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>>;
    getPasswordOrgConfig(): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>>;
    putPasswordOrgConfig(requestParameters: sdk.PasswordConfigurationV2025ApiPutPasswordOrgConfigRequest): Promise<AxiosResponse<sdk.PasswordOrgConfigV2025, any>>;
    getPasswordDictionary(): Promise<AxiosResponse<string, any>>;
    putPasswordDictionary(requestParameters?: sdk.PasswordDictionaryV2025ApiPutPasswordDictionaryRequest): Promise<AxiosResponse<void, any>>;
    createDigitToken(requestParameters: sdk.PasswordManagementV2025ApiCreateDigitTokenRequest): Promise<AxiosResponse<sdk.PasswordDigitTokenV2025, any>>;
    getPasswordChangeStatus(requestParameters: sdk.PasswordManagementV2025ApiGetPasswordChangeStatusRequest): Promise<AxiosResponse<sdk.PasswordStatusV2025, any>>;
    queryPasswordInfo(requestParameters: sdk.PasswordManagementV2025ApiQueryPasswordInfoRequest): Promise<AxiosResponse<sdk.PasswordInfoV2025, any>>;
    setPassword(requestParameters: sdk.PasswordManagementV2025ApiSetPasswordRequest): Promise<AxiosResponse<sdk.PasswordChangeResponseV2025, any>>;
    createPasswordPolicy(requestParameters: sdk.PasswordPoliciesV2025ApiCreatePasswordPolicyRequest): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>>;
    deletePasswordPolicy(requestParameters: sdk.PasswordPoliciesV2025ApiDeletePasswordPolicyRequest): Promise<AxiosResponse<void, any>>;
    getPasswordPolicyById(requestParameters: sdk.PasswordPoliciesV2025ApiGetPasswordPolicyByIdRequest): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>>;
    listPasswordPolicies(requestParameters?: sdk.PasswordPoliciesV2025ApiListPasswordPoliciesRequest): Promise<AxiosResponse<Array<sdk.PasswordPolicyV3DtoV2025>, any>>;
    setPasswordPolicy(requestParameters: sdk.PasswordPoliciesV2025ApiSetPasswordPolicyRequest): Promise<AxiosResponse<sdk.PasswordPolicyV3DtoV2025, any>>;
    createPasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiCreatePasswordSyncGroupRequest): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>>;
    deletePasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiDeletePasswordSyncGroupRequest): Promise<AxiosResponse<void, any>>;
    getPasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiGetPasswordSyncGroupRequest): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>>;
    getPasswordSyncGroups(requestParameters?: sdk.PasswordSyncGroupsV2025ApiGetPasswordSyncGroupsRequest): Promise<AxiosResponse<Array<sdk.PasswordSyncGroupV2025>, any>>;
    updatePasswordSyncGroup(requestParameters: sdk.PasswordSyncGroupsV2025ApiUpdatePasswordSyncGroupRequest): Promise<AxiosResponse<sdk.PasswordSyncGroupV2025, any>>;
    createPersonalAccessToken(requestParameters: sdk.PersonalAccessTokensV2025ApiCreatePersonalAccessTokenRequest): Promise<AxiosResponse<sdk.CreatePersonalAccessTokenResponseV2025, any>>;
    deletePersonalAccessToken(requestParameters: sdk.PersonalAccessTokensV2025ApiDeletePersonalAccessTokenRequest): Promise<AxiosResponse<void, any>>;
    listPersonalAccessTokens(requestParameters?: sdk.PersonalAccessTokensV2025ApiListPersonalAccessTokensRequest): Promise<AxiosResponse<Array<sdk.GetPersonalAccessTokenResponseV2025>, any>>;
    patchPersonalAccessToken(requestParameters: sdk.PersonalAccessTokensV2025ApiPatchPersonalAccessTokenRequest): Promise<AxiosResponse<sdk.GetPersonalAccessTokenResponseV2025, any>>;
    getPublicIdentities(requestParameters?: sdk.PublicIdentitiesV2025ApiGetPublicIdentitiesRequest): Promise<AxiosResponse<Array<sdk.PublicIdentityV2025>, any>>;
    getPublicIdentityConfig(): Promise<AxiosResponse<sdk.PublicIdentityConfigV2025, any>>;
    updatePublicIdentityConfig(requestParameters: sdk.PublicIdentitiesConfigV2025ApiUpdatePublicIdentityConfigRequest): Promise<AxiosResponse<sdk.PublicIdentityConfigV2025, any>>;
    cancelReport(requestParameters: sdk.ReportsDataExtractionV2025ApiCancelReportRequest): Promise<AxiosResponse<void, any>>;
    getReport(requestParameters: sdk.ReportsDataExtractionV2025ApiGetReportRequest): Promise<AxiosResponse<File, any>>;
    getReportResult(requestParameters: sdk.ReportsDataExtractionV2025ApiGetReportResultRequest): Promise<AxiosResponse<sdk.ReportResultsV2025, any>>;
    startReport(requestParameters: sdk.ReportsDataExtractionV2025ApiStartReportRequest): Promise<AxiosResponse<sdk.TaskResultDetailsV2025, any>>;
    listRequestableObjects(requestParameters?: sdk.RequestableObjectsV2025ApiListRequestableObjectsRequest): Promise<AxiosResponse<Array<sdk.RequestableObjectV2025>, any>>;
    createRoleInsightRequests(requestParameters?: sdk.RoleInsightsV2025ApiCreateRoleInsightRequestsRequest): Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>>;
    downloadRoleInsightsEntitlementsChanges(requestParameters: sdk.RoleInsightsV2025ApiDownloadRoleInsightsEntitlementsChangesRequest): Promise<AxiosResponse<string, any>>;
    getEntitlementChangesIdentities(requestParameters: sdk.RoleInsightsV2025ApiGetEntitlementChangesIdentitiesRequest): Promise<AxiosResponse<Array<sdk.RoleInsightsIdentitiesV2025>, any>>;
    getRoleInsight(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightRequest): Promise<AxiosResponse<sdk.RoleInsightV2025, any>>;
    getRoleInsights(requestParameters?: sdk.RoleInsightsV2025ApiGetRoleInsightsRequest): Promise<AxiosResponse<Array<sdk.RoleInsightV2025>, any>>;
    getRoleInsightsCurrentEntitlements(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsCurrentEntitlementsRequest): Promise<AxiosResponse<Array<sdk.RoleInsightsEntitlementV2025>, any>>;
    getRoleInsightsEntitlementsChanges(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsEntitlementsChangesRequest): Promise<AxiosResponse<Array<sdk.RoleInsightsEntitlementChangesV2025>, any>>;
    getRoleInsightsRequests(requestParameters: sdk.RoleInsightsV2025ApiGetRoleInsightsRequestsRequest): Promise<AxiosResponse<sdk.RoleInsightsResponseV2025, any>>;
    getRoleInsightsSummary(requestParameters?: sdk.RoleInsightsV2025ApiGetRoleInsightsSummaryRequest): Promise<AxiosResponse<sdk.RoleInsightsSummaryV2025, any>>;
    createRole(requestParameters: sdk.RolesV2025ApiCreateRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>>;
    deleteBulkRoles(requestParameters: sdk.RolesV2025ApiDeleteBulkRolesRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>>;
    deleteMetadataFromRoleByKeyAndValue(requestParameters: sdk.RolesV2025ApiDeleteMetadataFromRoleByKeyAndValueRequest): Promise<AxiosResponse<void, any>>;
    deleteRole(requestParameters: sdk.RolesV2025ApiDeleteRoleRequest): Promise<AxiosResponse<void, any>>;
    getBulkUpdateStatus(): Promise<AxiosResponse<Array<sdk.RoleGetAllBulkUpdateResponseV2025>, any>>;
    getBulkUpdateStatusById(requestParameters: sdk.RolesV2025ApiGetBulkUpdateStatusByIdRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
    getRole(requestParameters: sdk.RolesV2025ApiGetRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>>;
    getRoleAssignedIdentities(requestParameters: sdk.RolesV2025ApiGetRoleAssignedIdentitiesRequest): Promise<AxiosResponse<Array<sdk.RoleIdentityV2025>, any>>;
    getRoleEntitlements(requestParameters: sdk.RolesV2025ApiGetRoleEntitlementsRequest): Promise<AxiosResponse<Array<sdk.EntitlementV2025>, any>>;
    listRoles(requestParameters?: sdk.RolesV2025ApiListRolesRequest): Promise<AxiosResponse<Array<sdk.RoleV2025>, any>>;
    patchRole(requestParameters: sdk.RolesV2025ApiPatchRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>>;
    searchRolesByFilter(requestParameters?: sdk.RolesV2025ApiSearchRolesByFilterRequest): Promise<AxiosResponse<sdk.RoleV2025, any>>;
    updateAttributeKeyAndValueToRole(requestParameters: sdk.RolesV2025ApiUpdateAttributeKeyAndValueToRoleRequest): Promise<AxiosResponse<sdk.RoleV2025, any>>;
    updateRolesMetadataByFilter(requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByFilterRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
    updateRolesMetadataByIds(requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByIdsRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
    updateRolesMetadataByQuery(requestParameters: sdk.RolesV2025ApiUpdateRolesMetadataByQueryRequest): Promise<AxiosResponse<sdk.RoleBulkUpdateResponseV2025, any>>;
    createSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiCreateSIMIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
    deleteSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiDeleteSIMIntegrationRequest): Promise<AxiosResponse<void, any>>;
    getSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiGetSIMIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
    getSIMIntegrations(requestParameters?: sdk.SIMIntegrationsV2025ApiGetSIMIntegrationsRequest): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>>;
    patchBeforeProvisioningRule(requestParameters: sdk.SIMIntegrationsV2025ApiPatchBeforeProvisioningRuleRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
    patchSIMAttributes(requestParameters: sdk.SIMIntegrationsV2025ApiPatchSIMAttributesRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
    putSIMIntegration(requestParameters: sdk.SIMIntegrationsV2025ApiPutSIMIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
    createSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiCreateSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>>;
    deleteSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiDeleteSodPolicyRequest): Promise<AxiosResponse<void, any>>;
    deleteSodPolicySchedule(requestParameters: sdk.SODPoliciesV2025ApiDeleteSodPolicyScheduleRequest): Promise<AxiosResponse<void, any>>;
    getCustomViolationReport(requestParameters: sdk.SODPoliciesV2025ApiGetCustomViolationReportRequest): Promise<AxiosResponse<File, any>>;
    getDefaultViolationReport(requestParameters: sdk.SODPoliciesV2025ApiGetDefaultViolationReportRequest): Promise<AxiosResponse<File, any>>;
    getSodAllReportRunStatus(): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
    getSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiGetSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>>;
    getSodPolicySchedule(requestParameters: sdk.SODPoliciesV2025ApiGetSodPolicyScheduleRequest): Promise<AxiosResponse<sdk.SodPolicyScheduleV2025, any>>;
    getSodViolationReportRunStatus(requestParameters: sdk.SODPoliciesV2025ApiGetSodViolationReportRunStatusRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
    getSodViolationReportStatus(requestParameters: sdk.SODPoliciesV2025ApiGetSodViolationReportStatusRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
    listSodPolicies(requestParameters?: sdk.SODPoliciesV2025ApiListSodPoliciesRequest): Promise<AxiosResponse<Array<sdk.SodPolicyV2025>, any>>;
    patchSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiPatchSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>>;
    putPolicySchedule(requestParameters: sdk.SODPoliciesV2025ApiPutPolicyScheduleRequest): Promise<AxiosResponse<sdk.SodPolicyScheduleV2025, any>>;
    putSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiPutSodPolicyRequest): Promise<AxiosResponse<sdk.SodPolicyV2025, any>>;
    startEvaluateSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiStartEvaluateSodPolicyRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
    startSodAllPoliciesForOrg(requestParameters?: sdk.SODPoliciesV2025ApiStartSodAllPoliciesForOrgRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
    startSodPolicy(requestParameters: sdk.SODPoliciesV2025ApiStartSodPolicyRequest): Promise<AxiosResponse<sdk.ReportResultReferenceV2025, any>>;
    startPredictSodViolations(requestParameters: sdk.SODViolationsV2025ApiStartPredictSodViolationsRequest): Promise<AxiosResponse<sdk.ViolationPredictionV2025, any>>;
    startViolationCheck(requestParameters: sdk.SODViolationsV2025ApiStartViolationCheckRequest): Promise<AxiosResponse<sdk.SodViolationCheckV2025, any>>;
    exportSpConfig(requestParameters: sdk.SPConfigV2025ApiExportSpConfigRequest): Promise<AxiosResponse<sdk.SpConfigExportJobV2025, any>>;
    getSpConfigExport(requestParameters: sdk.SPConfigV2025ApiGetSpConfigExportRequest): Promise<AxiosResponse<sdk.SpConfigExportResultsV2025, any>>;
    getSpConfigExportStatus(requestParameters: sdk.SPConfigV2025ApiGetSpConfigExportStatusRequest): Promise<AxiosResponse<sdk.SpConfigExportJobStatusV2025, any>>;
    getSpConfigImport(requestParameters: sdk.SPConfigV2025ApiGetSpConfigImportRequest): Promise<AxiosResponse<sdk.SpConfigImportResultsV2025, any>>;
    getSpConfigImportStatus(requestParameters: sdk.SPConfigV2025ApiGetSpConfigImportStatusRequest): Promise<AxiosResponse<sdk.SpConfigImportJobStatusV2025, any>>;
    importSpConfig(requestParameters: sdk.SPConfigV2025ApiImportSpConfigRequest): Promise<AxiosResponse<sdk.SpConfigJobV2025, any>>;
    listSpConfigObjects(): Promise<AxiosResponse<Array<sdk.SpConfigObjectV2025>, any>>;
    createSavedSearch(requestParameters: sdk.SavedSearchV2025ApiCreateSavedSearchRequest): Promise<AxiosResponse<sdk.SavedSearchV2025, any>>;
    deleteSavedSearch(requestParameters: sdk.SavedSearchV2025ApiDeleteSavedSearchRequest): Promise<AxiosResponse<void, any>>;
    executeSavedSearch(requestParameters: sdk.SavedSearchV2025ApiExecuteSavedSearchRequest): Promise<AxiosResponse<void, any>>;
    getSavedSearch(requestParameters: sdk.SavedSearchV2025ApiGetSavedSearchRequest): Promise<AxiosResponse<sdk.SavedSearchV2025, any>>;
    listSavedSearches(requestParameters?: sdk.SavedSearchV2025ApiListSavedSearchesRequest): Promise<AxiosResponse<Array<sdk.SavedSearchV2025>, any>>;
    putSavedSearch(requestParameters: sdk.SavedSearchV2025ApiPutSavedSearchRequest): Promise<AxiosResponse<sdk.SavedSearchV2025, any>>;
    createScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiCreateScheduledSearchRequest): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>>;
    deleteScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiDeleteScheduledSearchRequest): Promise<AxiosResponse<void, any>>;
    getScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiGetScheduledSearchRequest): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>>;
    listScheduledSearch(requestParameters?: sdk.ScheduledSearchV2025ApiListScheduledSearchRequest): Promise<AxiosResponse<Array<sdk.ScheduledSearchV2025>, any>>;
    unsubscribeScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiUnsubscribeScheduledSearchRequest): Promise<AxiosResponse<void, any>>;
    updateScheduledSearch(requestParameters: sdk.ScheduledSearchV2025ApiUpdateScheduledSearchRequest): Promise<AxiosResponse<sdk.ScheduledSearchV2025, any>>;
    searchAggregate(requestParameters: sdk.SearchV2025ApiSearchAggregateRequest): Promise<AxiosResponse<sdk.AggregationResultV2025, any>>;
    searchCount(requestParameters: sdk.SearchV2025ApiSearchCountRequest): Promise<AxiosResponse<void, any>>;
    searchGet(requestParameters: sdk.SearchV2025ApiSearchGetRequest): Promise<AxiosResponse<sdk.SearchDocumentV2025, any>>;
    searchPost(requestParameters: sdk.SearchV2025ApiSearchPostRequest): Promise<AxiosResponse<Array<sdk.SearchDocumentsV2025>, any>>;
    createSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiCreateSearchAttributeConfigRequest): Promise<AxiosResponse<object, any>>;
    deleteSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiDeleteSearchAttributeConfigRequest): Promise<AxiosResponse<void, any>>;
    getSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiGetSearchAttributeConfigRequest): Promise<AxiosResponse<Array<sdk.SearchAttributeConfigV2025>, any>>;
    getSingleSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiGetSingleSearchAttributeConfigRequest): Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>>;
    patchSearchAttributeConfig(requestParameters: sdk.SearchAttributeConfigurationV2025ApiPatchSearchAttributeConfigRequest): Promise<AxiosResponse<sdk.SearchAttributeConfigV2025, any>>;
    createSegment(requestParameters: sdk.SegmentsV2025ApiCreateSegmentRequest): Promise<AxiosResponse<sdk.SegmentV2025, any>>;
    deleteSegment(requestParameters: sdk.SegmentsV2025ApiDeleteSegmentRequest): Promise<AxiosResponse<void, any>>;
    getSegment(requestParameters: sdk.SegmentsV2025ApiGetSegmentRequest): Promise<AxiosResponse<sdk.SegmentV2025, any>>;
    listSegments(requestParameters?: sdk.SegmentsV2025ApiListSegmentsRequest): Promise<AxiosResponse<Array<sdk.SegmentV2025>, any>>;
    patchSegment(requestParameters: sdk.SegmentsV2025ApiPatchSegmentRequest): Promise<AxiosResponse<sdk.SegmentV2025, any>>;
    createServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiCreateServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
    deleteServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiDeleteServiceDeskIntegrationRequest): Promise<AxiosResponse<void, any>>;
    getServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
    getServiceDeskIntegrationTemplate(requestParameters: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationTemplateRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationTemplateDtoV2025, any>>;
    getServiceDeskIntegrationTypes(): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationTemplateTypeV2025>, any>>;
    getServiceDeskIntegrations(requestParameters?: sdk.ServiceDeskIntegrationV2025ApiGetServiceDeskIntegrationsRequest): Promise<AxiosResponse<Array<sdk.ServiceDeskIntegrationDtoV2025>, any>>;
    getStatusCheckDetails(): Promise<AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>>;
    patchServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiPatchServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
    putServiceDeskIntegration(requestParameters: sdk.ServiceDeskIntegrationV2025ApiPutServiceDeskIntegrationRequest): Promise<AxiosResponse<sdk.ServiceDeskIntegrationDtoV2025, any>>;
    updateStatusCheckDetails(requestParameters: sdk.ServiceDeskIntegrationV2025ApiUpdateStatusCheckDetailsRequest): Promise<AxiosResponse<sdk.QueuedCheckConfigDetailsV2025, any>>;
    getStatusBySourceId(requestParameters: sdk.SourceUsagesV2025ApiGetStatusBySourceIdRequest): Promise<AxiosResponse<sdk.SourceUsageStatusV2025, any>>;
    getUsagesBySourceId(requestParameters: sdk.SourceUsagesV2025ApiGetUsagesBySourceIdRequest): Promise<AxiosResponse<Array<sdk.SourceUsageV2025>, any>>;
    createProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiCreateProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>>;
    createSource(requestParameters: sdk.SourcesV2025ApiCreateSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>>;
    createSourceSchedule(requestParameters: sdk.SourcesV2025ApiCreateSourceScheduleRequest): Promise<AxiosResponse<sdk.Schedule1V2025, any>>;
    createSourceSchema(requestParameters: sdk.SourcesV2025ApiCreateSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>>;
    deleteAccountsAsync(requestParameters: sdk.SourcesV2025ApiDeleteAccountsAsyncRequest): Promise<AxiosResponse<sdk.TaskResultDtoV2025, any>>;
    deleteNativeChangeDetectionConfig(requestParameters: sdk.SourcesV2025ApiDeleteNativeChangeDetectionConfigRequest): Promise<AxiosResponse<void, any>>;
    deleteProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiDeleteProvisioningPolicyRequest): Promise<AxiosResponse<void, any>>;
    deleteSource(requestParameters: sdk.SourcesV2025ApiDeleteSourceRequest): Promise<AxiosResponse<sdk.DeleteSource202ResponseV2025, any>>;
    deleteSourceSchedule(requestParameters: sdk.SourcesV2025ApiDeleteSourceScheduleRequest): Promise<AxiosResponse<void, any>>;
    deleteSourceSchema(requestParameters: sdk.SourcesV2025ApiDeleteSourceSchemaRequest): Promise<AxiosResponse<void, any>>;
    getAccountsSchema(requestParameters: sdk.SourcesV2025ApiGetAccountsSchemaRequest): Promise<AxiosResponse<void, any>>;
    getCorrelationConfig(requestParameters: sdk.SourcesV2025ApiGetCorrelationConfigRequest): Promise<AxiosResponse<sdk.CorrelationConfigV2025, any>>;
    getEntitlementsSchema(requestParameters: sdk.SourcesV2025ApiGetEntitlementsSchemaRequest): Promise<AxiosResponse<void, any>>;
    getNativeChangeDetectionConfig(requestParameters: sdk.SourcesV2025ApiGetNativeChangeDetectionConfigRequest): Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>>;
    getProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiGetProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>>;
    getSource(requestParameters: sdk.SourcesV2025ApiGetSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>>;
    getSourceAttrSyncConfig(requestParameters: sdk.SourcesV2025ApiGetSourceAttrSyncConfigRequest): Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>>;
    getSourceConfig(requestParameters: sdk.SourcesV2025ApiGetSourceConfigRequest): Promise<AxiosResponse<sdk.ConnectorDetailV2025, any>>;
    getSourceConnections(requestParameters: sdk.SourcesV2025ApiGetSourceConnectionsRequest): Promise<AxiosResponse<sdk.SourceConnectionsDtoV2025, any>>;
    getSourceEntitlementRequestConfig(requestParameters?: sdk.SourcesV2025ApiGetSourceEntitlementRequestConfigRequest): Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>>;
    getSourceHealth(requestParameters: sdk.SourcesV2025ApiGetSourceHealthRequest): Promise<AxiosResponse<sdk.SourceHealthDtoV2025, any>>;
    getSourceSchedule(requestParameters: sdk.SourcesV2025ApiGetSourceScheduleRequest): Promise<AxiosResponse<sdk.Schedule1V2025, any>>;
    getSourceSchedules(requestParameters: sdk.SourcesV2025ApiGetSourceSchedulesRequest): Promise<AxiosResponse<Array<sdk.Schedule1V2025>, any>>;
    getSourceSchema(requestParameters: sdk.SourcesV2025ApiGetSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>>;
    getSourceSchemas(requestParameters: sdk.SourcesV2025ApiGetSourceSchemasRequest): Promise<AxiosResponse<Array<sdk.SchemaV2025>, any>>;
    importAccounts(requestParameters: sdk.SourcesV2025ApiImportAccountsRequest): Promise<AxiosResponse<sdk.LoadAccountsTaskV2025, any>>;
    importAccountsSchema(requestParameters: sdk.SourcesV2025ApiImportAccountsSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>>;
    importConnectorFile(requestParameters: sdk.SourcesV2025ApiImportConnectorFileRequest): Promise<AxiosResponse<sdk.SourceV2025, any>>;
    importEntitlements(requestParameters: sdk.SourcesV2025ApiImportEntitlementsRequest): Promise<AxiosResponse<sdk.LoadEntitlementTaskV2025, any>>;
    importEntitlementsSchema(requestParameters: sdk.SourcesV2025ApiImportEntitlementsSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>>;
    importUncorrelatedAccounts(requestParameters: sdk.SourcesV2025ApiImportUncorrelatedAccountsRequest): Promise<AxiosResponse<sdk.LoadUncorrelatedAccountsTaskV2025, any>>;
    listProvisioningPolicies(requestParameters: sdk.SourcesV2025ApiListProvisioningPoliciesRequest): Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>>;
    listSources(requestParameters?: sdk.SourcesV2025ApiListSourcesRequest): Promise<AxiosResponse<Array<sdk.SourceV2025>, any>>;
    pingCluster(requestParameters: sdk.SourcesV2025ApiPingClusterRequest): Promise<AxiosResponse<sdk.StatusResponseV2025, any>>;
    putCorrelationConfig(requestParameters: sdk.SourcesV2025ApiPutCorrelationConfigRequest): Promise<AxiosResponse<sdk.CorrelationConfigV2025, any>>;
    putNativeChangeDetectionConfig(requestParameters: sdk.SourcesV2025ApiPutNativeChangeDetectionConfigRequest): Promise<AxiosResponse<sdk.NativeChangeDetectionConfigV2025, any>>;
    putProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiPutProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>>;
    putSource(requestParameters: sdk.SourcesV2025ApiPutSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>>;
    putSourceAttrSyncConfig(requestParameters: sdk.SourcesV2025ApiPutSourceAttrSyncConfigRequest): Promise<AxiosResponse<sdk.AttrSyncSourceConfigV2025, any>>;
    putSourceSchema(requestParameters: sdk.SourcesV2025ApiPutSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>>;
    searchResourceObjects(requestParameters: sdk.SourcesV2025ApiSearchResourceObjectsRequest): Promise<AxiosResponse<sdk.ResourceObjectsResponseV2025, any>>;
    syncAttributesForSource(requestParameters: sdk.SourcesV2025ApiSyncAttributesForSourceRequest): Promise<AxiosResponse<sdk.SourceSyncJobV2025, any>>;
    testSourceConfiguration(requestParameters: sdk.SourcesV2025ApiTestSourceConfigurationRequest): Promise<AxiosResponse<sdk.StatusResponseV2025, any>>;
    testSourceConnection(requestParameters: sdk.SourcesV2025ApiTestSourceConnectionRequest): Promise<AxiosResponse<sdk.StatusResponseV2025, any>>;
    updatePasswordPolicyHolders(requestParameters: sdk.SourcesV2025ApiUpdatePasswordPolicyHoldersRequest): Promise<AxiosResponse<Array<sdk.PasswordPolicyHoldersDtoInnerV2025>, any>>;
    updateProvisioningPoliciesInBulk(requestParameters: sdk.SourcesV2025ApiUpdateProvisioningPoliciesInBulkRequest): Promise<AxiosResponse<Array<sdk.ProvisioningPolicyDtoV2025>, any>>;
    updateProvisioningPolicy(requestParameters: sdk.SourcesV2025ApiUpdateProvisioningPolicyRequest): Promise<AxiosResponse<sdk.ProvisioningPolicyDtoV2025, any>>;
    updateSource(requestParameters: sdk.SourcesV2025ApiUpdateSourceRequest): Promise<AxiosResponse<sdk.SourceV2025, any>>;
    updateSourceEntitlementRequestConfig(requestParameters: sdk.SourcesV2025ApiUpdateSourceEntitlementRequestConfigRequest): Promise<AxiosResponse<sdk.SourceEntitlementRequestConfigV2025, any>>;
    updateSourceSchedule(requestParameters: sdk.SourcesV2025ApiUpdateSourceScheduleRequest): Promise<AxiosResponse<sdk.Schedule1V2025, any>>;
    updateSourceSchema(requestParameters: sdk.SourcesV2025ApiUpdateSourceSchemaRequest): Promise<AxiosResponse<sdk.SchemaV2025, any>>;
    getSedBatchStats(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiGetSedBatchStatsRequest): Promise<AxiosResponse<sdk.SedBatchStatsV2025, any>>;
    getSedBatches(requestParameters?: sdk.SuggestedEntitlementDescriptionV2025ApiGetSedBatchesRequest): Promise<AxiosResponse<Array<sdk.SedBatchRecordV2025>, any>>;
    listSeds(requestParameters?: sdk.SuggestedEntitlementDescriptionV2025ApiListSedsRequest): Promise<AxiosResponse<Array<sdk.SedV2025>, any>>;
    patchSed(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiPatchSedRequest): Promise<AxiosResponse<sdk.SedV2025, any>>;
    submitSedApproval(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedApprovalRequest): Promise<AxiosResponse<Array<sdk.SedApprovalStatusV2025>, any>>;
    submitSedAssignment(requestParameters: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedAssignmentRequest): Promise<AxiosResponse<sdk.SedAssignmentResponseV2025, any>>;
    submitSedBatchRequest(requestParameters?: sdk.SuggestedEntitlementDescriptionV2025ApiSubmitSedBatchRequestRequest): Promise<AxiosResponse<sdk.SedBatchResponseV2025, any>>;
    deleteTaggedObject(requestParameters: sdk.TaggedObjectsV2025ApiDeleteTaggedObjectRequest): Promise<AxiosResponse<void, any>>;
    deleteTagsToManyObject(requestParameters: sdk.TaggedObjectsV2025ApiDeleteTagsToManyObjectRequest): Promise<AxiosResponse<void, any>>;
    getTaggedObject(requestParameters: sdk.TaggedObjectsV2025ApiGetTaggedObjectRequest): Promise<AxiosResponse<sdk.TaggedObjectV2025, any>>;
    listTaggedObjects(requestParameters?: sdk.TaggedObjectsV2025ApiListTaggedObjectsRequest): Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>>;
    listTaggedObjectsByType(requestParameters: sdk.TaggedObjectsV2025ApiListTaggedObjectsByTypeRequest): Promise<AxiosResponse<Array<sdk.TaggedObjectV2025>, any>>;
    putTaggedObject(requestParameters: sdk.TaggedObjectsV2025ApiPutTaggedObjectRequest): Promise<AxiosResponse<sdk.TaggedObjectV2025, any>>;
    setTagToObject(requestParameters: sdk.TaggedObjectsV2025ApiSetTagToObjectRequest): Promise<AxiosResponse<void, any>>;
    setTagsToManyObjects(requestParameters: sdk.TaggedObjectsV2025ApiSetTagsToManyObjectsRequest): Promise<AxiosResponse<Array<sdk.BulkTaggedObjectResponseV2025>, any>>;
    getPendingTaskHeaders(requestParameters: sdk.TaskManagementV2025ApiGetPendingTaskHeadersRequest): Promise<AxiosResponse<void, any>>;
    getPendingTasks(requestParameters?: sdk.TaskManagementV2025ApiGetPendingTasksRequest): Promise<AxiosResponse<Array<sdk.TaskStatusV2025>, any>>;
    getTaskStatus(requestParameters: sdk.TaskManagementV2025ApiGetTaskStatusRequest): Promise<AxiosResponse<sdk.TaskStatusV2025, any>>;
    getTaskStatusList(requestParameters?: sdk.TaskManagementV2025ApiGetTaskStatusListRequest): Promise<AxiosResponse<Array<sdk.TaskStatusV2025>, any>>;
    updateTaskStatus(requestParameters: sdk.TaskManagementV2025ApiUpdateTaskStatusRequest): Promise<AxiosResponse<sdk.TaskStatusV2025, any>>;
    getTenant(): Promise<AxiosResponse<sdk.TenantV2025, any>>;
    getTenantContext(requestParameters?: sdk.TenantContextV2025ApiGetTenantContextRequest): Promise<AxiosResponse<Array<sdk.GetTenantContext200ResponseInnerV2025>, any>>;
    patchTenantContext(requestParameters: sdk.TenantContextV2025ApiPatchTenantContextRequest): Promise<AxiosResponse<void, any>>;
    createTransform(requestParameters: sdk.TransformsV2025ApiCreateTransformRequest): Promise<AxiosResponse<sdk.TransformReadV2025, any>>;
    deleteTransform(requestParameters: sdk.TransformsV2025ApiDeleteTransformRequest): Promise<AxiosResponse<void, any>>;
    getTransform(requestParameters: sdk.TransformsV2025ApiGetTransformRequest): Promise<AxiosResponse<sdk.TransformReadV2025, any>>;
    listTransforms(requestParameters?: sdk.TransformsV2025ApiListTransformsRequest): Promise<AxiosResponse<Array<sdk.TransformReadV2025>, any>>;
    updateTransform(requestParameters: sdk.TransformsV2025ApiUpdateTransformRequest): Promise<AxiosResponse<sdk.TransformReadV2025, any>>;
    completeTriggerInvocation(requestParameters: sdk.TriggersV2025ApiCompleteTriggerInvocationRequest): Promise<AxiosResponse<void, any>>;
    createSubscription(requestParameters: sdk.TriggersV2025ApiCreateSubscriptionRequest): Promise<AxiosResponse<sdk.SubscriptionV2025, any>>;
    deleteSubscription(requestParameters: sdk.TriggersV2025ApiDeleteSubscriptionRequest): Promise<AxiosResponse<void, any>>;
    listSubscriptions(requestParameters: sdk.TriggersV2025ApiListSubscriptionsRequest): Promise<AxiosResponse<Array<sdk.SubscriptionV2025>, any>>;
    listTriggerInvocationStatus(requestParameters?: sdk.TriggersV2025ApiListTriggerInvocationStatusRequest): Promise<AxiosResponse<Array<sdk.InvocationStatusV2025>, any>>;
    listTriggers(requestParameters?: sdk.TriggersV2025ApiListTriggersRequest): Promise<AxiosResponse<Array<sdk.TriggerV2025>, any>>;
    patchSubscription(requestParameters: sdk.TriggersV2025ApiPatchSubscriptionRequest): Promise<AxiosResponse<sdk.SubscriptionV2025, any>>;
    startTestTriggerInvocation(requestParameters: sdk.TriggersV2025ApiStartTestTriggerInvocationRequest): Promise<AxiosResponse<Array<sdk.InvocationV2025>, any>>;
    testSubscriptionFilter(requestParameters: sdk.TriggersV2025ApiTestSubscriptionFilterRequest): Promise<AxiosResponse<sdk.ValidateFilterOutputDtoV2025, any>>;
    updateSubscription(requestParameters: sdk.TriggersV2025ApiUpdateSubscriptionRequest): Promise<AxiosResponse<sdk.SubscriptionV2025, any>>;
    getTenantUiMetadata(requestParameters?: sdk.UIMetadataV2025ApiGetTenantUiMetadataRequest): Promise<AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>>;
    setTenantUiMetadata(requestParameters: sdk.UIMetadataV2025ApiSetTenantUiMetadataRequest): Promise<AxiosResponse<sdk.TenantUiMetadataItemResponseV2025, any>>;
    createVendorConnectorMapping(requestParameters: sdk.VendorConnectorMappingsV2025ApiCreateVendorConnectorMappingRequest): Promise<AxiosResponse<sdk.VendorConnectorMappingV2025, any>>;
    deleteVendorConnectorMapping(requestParameters: sdk.VendorConnectorMappingsV2025ApiDeleteVendorConnectorMappingRequest): Promise<AxiosResponse<sdk.DeleteVendorConnectorMapping200ResponseV2025, any>>;
    getVendorConnectorMappings(): Promise<AxiosResponse<Array<sdk.VendorConnectorMappingV2025>, any>>;
    approveApprovalItem(requestParameters: sdk.WorkItemsV2025ApiApproveApprovalItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
    approveApprovalItemsInBulk(requestParameters: sdk.WorkItemsV2025ApiApproveApprovalItemsInBulkRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
    completeWorkItem(requestParameters: sdk.WorkItemsV2025ApiCompleteWorkItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
    forwardWorkItem(requestParameters: sdk.WorkItemsV2025ApiForwardWorkItemRequest): Promise<AxiosResponse<void, any>>;
    getCompletedWorkItems(requestParameters?: sdk.WorkItemsV2025ApiGetCompletedWorkItemsRequest): Promise<AxiosResponse<Array<sdk.WorkItemsV2025>, any>>;
    getCountCompletedWorkItems(requestParameters?: sdk.WorkItemsV2025ApiGetCountCompletedWorkItemsRequest): Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>>;
    getCountWorkItems(requestParameters?: sdk.WorkItemsV2025ApiGetCountWorkItemsRequest): Promise<AxiosResponse<sdk.WorkItemsCountV2025, any>>;
    getWorkItem(requestParameters: sdk.WorkItemsV2025ApiGetWorkItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
    getWorkItemsSummary(requestParameters?: sdk.WorkItemsV2025ApiGetWorkItemsSummaryRequest): Promise<AxiosResponse<sdk.WorkItemsSummaryV2025, any>>;
    listWorkItems(requestParameters?: sdk.WorkItemsV2025ApiListWorkItemsRequest): Promise<AxiosResponse<Array<sdk.WorkItemsV2025>, any>>;
    rejectApprovalItem(requestParameters: sdk.WorkItemsV2025ApiRejectApprovalItemRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
    rejectApprovalItemsInBulk(requestParameters: sdk.WorkItemsV2025ApiRejectApprovalItemsInBulkRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
    submitAccountSelection(requestParameters: sdk.WorkItemsV2025ApiSubmitAccountSelectionRequest): Promise<AxiosResponse<sdk.WorkItemsV2025, any>>;
    createReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiCreateReassignmentConfigurationRequest): Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>>;
    deleteReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiDeleteReassignmentConfigurationRequest): Promise<AxiosResponse<void, any>>;
    getEvaluateReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiGetEvaluateReassignmentConfigurationRequest): Promise<AxiosResponse<Array<sdk.EvaluateResponseV2025>, any>>;
    getReassignmentConfigTypes(requestParameters?: sdk.WorkReassignmentV2025ApiGetReassignmentConfigTypesRequest): Promise<AxiosResponse<Array<sdk.ConfigTypeV2025>, any>>;
    getReassignmentConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiGetReassignmentConfigurationRequest): Promise<AxiosResponse<sdk.ConfigurationResponseV2025, any>>;
    getTenantConfigConfiguration(requestParameters?: sdk.WorkReassignmentV2025ApiGetTenantConfigConfigurationRequest): Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>>;
    listReassignmentConfigurations(requestParameters?: sdk.WorkReassignmentV2025ApiListReassignmentConfigurationsRequest): Promise<AxiosResponse<Array<sdk.ConfigurationResponseV2025>, any>>;
    putReassignmentConfig(requestParameters: sdk.WorkReassignmentV2025ApiPutReassignmentConfigRequest): Promise<AxiosResponse<sdk.ConfigurationItemResponseV2025, any>>;
    putTenantConfiguration(requestParameters: sdk.WorkReassignmentV2025ApiPutTenantConfigurationRequest): Promise<AxiosResponse<sdk.TenantConfigurationResponseV2025, any>>;
    cancelWorkflowExecution(requestParameters: sdk.WorkflowsV2025ApiCancelWorkflowExecutionRequest): Promise<AxiosResponse<void, any>>;
    createExternalExecuteWorkflow(requestParameters: sdk.WorkflowsV2025ApiCreateExternalExecuteWorkflowRequest): Promise<AxiosResponse<sdk.CreateExternalExecuteWorkflow200ResponseV2025, any>>;
    createWorkflow(requestParameters: sdk.WorkflowsV2025ApiCreateWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>>;
    createWorkflowExternalTrigger(requestParameters: sdk.WorkflowsV2025ApiCreateWorkflowExternalTriggerRequest): Promise<AxiosResponse<sdk.WorkflowOAuthClientV2025, any>>;
    deleteWorkflow(requestParameters: sdk.WorkflowsV2025ApiDeleteWorkflowRequest): Promise<AxiosResponse<void, any>>;
    getWorkflow(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>>;
    getWorkflowExecution(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionRequest): Promise<AxiosResponse<object, any>>;
    getWorkflowExecutionHistory(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionHistoryRequest): Promise<AxiosResponse<Array<sdk.WorkflowExecutionEventV2025>, any>>;
    getWorkflowExecutions(requestParameters: sdk.WorkflowsV2025ApiGetWorkflowExecutionsRequest): Promise<AxiosResponse<Array<sdk.WorkflowExecutionV2025>, any>>;
    listCompleteWorkflowLibrary(requestParameters?: sdk.WorkflowsV2025ApiListCompleteWorkflowLibraryRequest): Promise<AxiosResponse<Array<sdk.ListCompleteWorkflowLibrary200ResponseInnerV2025>, any>>;
    listWorkflowLibraryActions(requestParameters?: sdk.WorkflowsV2025ApiListWorkflowLibraryActionsRequest): Promise<AxiosResponse<Array<sdk.WorkflowLibraryActionV2025>, any>>;
    listWorkflowLibraryOperators(): Promise<AxiosResponse<Array<sdk.WorkflowLibraryOperatorV2025>, any>>;
    listWorkflowLibraryTriggers(requestParameters?: sdk.WorkflowsV2025ApiListWorkflowLibraryTriggersRequest): Promise<AxiosResponse<Array<sdk.WorkflowLibraryTriggerV2025>, any>>;
    listWorkflows(): Promise<AxiosResponse<Array<sdk.WorkflowV2025>, any>>;
    patchWorkflow(requestParameters: sdk.WorkflowsV2025ApiPatchWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>>;
    putWorkflow(requestParameters: sdk.WorkflowsV2025ApiPutWorkflowRequest): Promise<AxiosResponse<sdk.WorkflowV2025, any>>;
    testExternalExecuteWorkflow(requestParameters: sdk.WorkflowsV2025ApiTestExternalExecuteWorkflowRequest): Promise<AxiosResponse<sdk.TestExternalExecuteWorkflow200ResponseV2025, any>>;
    testWorkflow(requestParameters: sdk.WorkflowsV2025ApiTestWorkflowRequest): Promise<AxiosResponse<sdk.TestWorkflow200ResponseV2025, any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SailPointSDKService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SailPointSDKService>;
}

declare class IdentitiesComponent implements OnInit {
    private dialog;
    private sdk;
    private cdr;
    title: string;
    identities: IdentityV2025[] & Record<string, unknown>[];
    filteredIdentities: IdentityV2025[] & Record<string, unknown>[];
    columnOrder: string[];
    displayedColumns: string[];
    allColumns: string[];
    loading: boolean;
    hasDataLoaded: boolean;
    pageSize: number;
    pageIndex: number;
    totalCount: number;
    sorters: string[];
    profileId: string;
    readonly sortableFields: string[];
    readonly sortFieldMap: Record<string, string>;
    readonly columnDisplayNames: Record<string, string>;
    paginator: MatPaginator;
    constructor(dialog: MatDialog, sdk: SailPointSDKService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    loadIdentities(): Promise<void>;
    onRemoteSearch(query: string): Promise<void>;
    onPageChange(event: PageEvent): void;
    toggleSort(displayColumn: string): void;
    isSorted(column: string): boolean;
    getSortSymbol(displayColumn: string): string | null;
    clearSort(): void;
    trackByFn(index: number, item: string): string;
    onView(identity: IdentityV2025): Promise<void>;
    getIdentityById(id: string): Promise<IdentityV2025>;
    openMessageDialog(errorMessage: string, title: string): void;
    onViewManager(identity: IdentityV2025): void;
    onViewAttributes(identity: IdentityV2025): void;
    formatValue(column: string, value: any): string;
    private capitalize;
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentitiesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IdentitiesComponent, "app-identities", never, {}, {}, never, never, true, never>;
}

declare class ReportDataService {
    private identities;
    private dataLoadedSubject;
    private isCompleteDataSubject;
    dataLoaded$: Observable<boolean>;
    isCompleteData$: Observable<boolean>;
    constructor();
    setIdentities(identities: IdentityV2025[], isCompleteDataset: boolean): void;
    getIdentities(): IdentityV2025[];
    clearIdentities(): void;
    hasLoadedData(): boolean;
    isDataComplete(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportDataService>;
}

declare class IdentityDetailViewComponent implements OnInit {
    private route;
    private router;
    private dataService;
    displayedIdentities: IdentityV2025[];
    allIdentities: IdentityV2025[];
    loading: boolean;
    filterCategory: string;
    filterValue: string;
    title: string;
    displayedColumns: string[];
    pageSize: number;
    pageIndex: number;
    totalCount: number;
    constructor(route: ActivatedRoute, router: Router, dataService: ReportDataService);
    ngOnInit(): void;
    private loadFilteredIdentities;
    private filterIdentities;
    private generateTitle;
    private updateDisplayedIdentities;
    onPageChange(event: PageEvent): void;
    sortData(sort: Sort): void;
    private compare;
    navigateBack(): void;
    formatLifecycleState(identity: IdentityV2025): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IdentityDetailViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IdentityDetailViewComponent, "app-identity-detail-view", never, {}, {}, never, never, true, never>;
}

declare const REPORT_EXAMPLE_ROUTES: Routes;

interface ThemeConfig {
    primary: string;
    secondary: string;
    primaryText: string;
    secondaryText: string;
    hoverText: string;
    background: string;
    logoLight?: string;
    logoDark?: string;
    logoLightFileName?: string;
    logoDarkFileName?: string;
}
declare class ThemeService {
    private isElectron;
    private isDarkSubject;
    readonly isDark$: rxjs.Observable<boolean>;
    logoUpdated$: Subject<void>;
    private themeSubject;
    theme$: rxjs.Observable<ThemeConfig | null>;
    private lastRawConfig;
    constructor();
    getRawConfig(): any;
    /**
     * Loads a theme from localStorage or Electron config.
     * If `apply` is true, applies the theme to the DOM.
     */
    loadTheme(mode?: 'light' | 'dark', apply?: boolean): Promise<ThemeConfig>;
    /**
     * Saves a theme configuration and applies it.
     */
    saveTheme(config: ThemeConfig, mode: 'light' | 'dark'): Promise<void>;
    /**
     * Validates if a given logo path is a file or base64 URL.
     */
    isValidLogoPath(value?: string): boolean;
    /**
     * Applies the given theme config to the DOM.
     */
    private applyTheme;
    /**
     * Returns the current saved mode.
     */
    getCurrentMode(): 'light' | 'dark';
    /**
     * Returns the default theme for the specified mode.
     * If running in Electron and logos exist, includes custom logos.
     */
    getDefaultTheme(mode: 'light' | 'dark'): Promise<ThemeConfig>;
    /**
     * Waits for a file to appear on disk, useful after saving a logo.
     */
    waitForFile(path: string, timeout?: number): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}

declare class ReportExampleComponent implements OnInit, OnDestroy {
    private sdk;
    private dataService;
    private themeService;
    private destroy$;
    title: string;
    loadingMessage: string;
    isCancelled: boolean;
    isLoadingComplete: boolean;
    isDark: boolean;
    identities: IdentityV2025[];
    loading: boolean;
    hasError: boolean;
    errorMessage: string;
    totalLoaded: number;
    constructor(sdk: SailPointSDKService, dataService: ReportDataService, themeService: ThemeService);
    ngOnInit(): void;
    cancelLoading(): void;
    loadIdentities(): Promise<void>;
    refresh(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportExampleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportExampleComponent, "app-report-example", never, {}, {}, never, never, true, never>;
}

declare class SailpointComponentsComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<SailpointComponentsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SailpointComponentsComponent, "app-sailpoint-components", never, {}, {}, never, never, true, never>;
}

declare class SailpointComponentsService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SailpointComponentsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SailpointComponentsService>;
}

declare class ThemePickerComponent implements OnInit {
    private themeService;
    private cdr;
    private snackBar;
    title: string;
    selectedLogoFileName: string;
    logoImageRef: ElementRef<HTMLImageElement>;
    readonly colorFields: Array<{
        label: string;
        key: keyof ThemeConfig;
    }>;
    mode: 'light' | 'dark';
    loading: boolean;
    emptyTheme(): ThemeConfig;
    lightColors: ThemeConfig;
    darkColors: ThemeConfig;
    get colors(): ThemeConfig;
    set colors(value: ThemeConfig);
    private ignoreNextDarkChange;
    ngOnInit(): void;
    onModeChange(): Promise<void>;
    selectedLogoFile?: File;
    onFileSelected(event: Event): void;
    loadThemeForMode(): Promise<void>;
    constructor(themeService: ThemeService, cdr: ChangeDetectorRef, snackBar: MatSnackBar);
    private readFileAsBuffer;
    onResetLogo(): Promise<void>;
    apply(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemePickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThemePickerComponent, "app-theme-picker", never, {}, {}, never, never, true, never>;
}

interface SavedTransform {
    id?: string;
    name: string;
    definition: any;
    lastModified: number;
    isNew: boolean;
    cloudVersion?: any;
}
declare class AutoSaveService {
    private readonly STORAGE_KEY;
    private readonly UNSAVED_CHANGES_KEY;
    private unsavedChangesSubject;
    unsavedChanges$: rxjs.Observable<Set<string>>;
    constructor();
    /**
     * Auto-save a transform locally
     */
    autoSave(transformId: string, name: string, definition: any, isNew?: boolean, cloudVersion?: any): void;
    /**
     * Get locally saved transform
     */
    getLocalSave(transformId: string, isNew?: boolean): SavedTransform | null;
    /**
     * Clear local save after successful cloud sync
     */
    clearLocalSave(transformId: string, isNew?: boolean): void;
    /**
     * Get all locally saved transforms
     */
    getAllLocalSaves(): SavedTransform[];
    /**
     * Check if transform has local changes
     */
    hasLocalChanges(transformId: string): boolean;
    /**
     * Check if transform definition differs from cloud version
     */
    hasUnsavedChanges(transformId: string, currentDefinition: any): boolean;
    private normalizeDefinition;
    /**
     * Get time since last auto-save
     */
    getTimeSinceLastSave(transformId: string, isNew?: boolean): string | null;
    private getStorageKey;
    private markAsUnsaved;
    private markAsSaved;
    private saveUnsavedChanges;
    private loadUnsavedChanges;
    /**
     * Clear all local saves (useful for cleanup)
     */
    clearAllLocalSaves(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoSaveService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AutoSaveService>;
}

interface ThemedDesigner extends Designer {
    setTheme?: (theme: 'dark' | 'light') => void;
}
interface StepDefinition {
    id: string;
    name: string;
    type: string;
    componentType: string;
    properties: Record<string, any>;
    sequence?: StepDefinition[];
    branches?: Record<string, StepDefinition[]>;
}
interface MyDefinition extends Definition {
    properties: {
        name: string;
        description: string;
    };
}
declare const rootModel: sequential_workflow_editor_model.RootModel;
declare const serializeStep: (step: Step) => sequential_workflow_model.PropertyValue;
declare function createDefinitionFromTransform(data: any): Definition;
declare function deserializeToStep(data: any): Step;
declare class TransformBuilderComponent implements OnInit, OnDestroy {
    private router;
    private dialog;
    private editorDialog;
    private sdk;
    private autoSaveService;
    private snackBar;
    private theme;
    private cdr;
    transform?: TransformReadV2025;
    private destroy$;
    private autoSaveSubject;
    private designer?;
    validatorConfiguration?: ValidatorConfiguration;
    stepEditorProvider?: StepEditorProvider;
    rootEditorProvider?: RootEditorProvider;
    definition?: Definition;
    definitionJSON?: string;
    isToolboxCollapsed: boolean;
    isEditorCollapsed: boolean;
    private defaultStepEditorProvider?;
    isValid?: boolean;
    customInputDate?: string;
    preview?: string;
    isReadonly: boolean;
    definitionModel?: DefinitionModel<Definition>;
    isReady: boolean;
    sourceMap: Map<string, string>;
    isSaving: boolean;
    isSyncing: boolean;
    lastAutoSave?: string;
    hasUnsavedChanges: boolean;
    isNewTransform: boolean;
    private themeSub;
    isDarkTheme: boolean;
    showDesigner: boolean;
    constructor(router: Router, dialog: MatDialog, editorDialog: MatDialog, sdk: SailPointSDKService, autoSaveService: AutoSaveService, snackBar: MatSnackBar, theme: ThemeService, cdr: ChangeDetectorRef);
    get designerTheme(): 'dark' | 'light';
    getDefaultFallbackIcon(): string;
    readonly stepsConfiguration: StepsConfiguration;
    readonly toolboxConfiguration: ToolboxConfiguration;
    ngOnDestroy(): void;
    ngOnInit(): void;
    private performAutoSave;
    saveToCloud(): Promise<void>;
    restoreFromCloud(): void;
    discardLocalChanges(): void;
    onDesignerReady(designer: ThemedDesigner): void;
    onDefinitionChanged(definition: Definition): void;
    private updateDefinitionJSON;
    toggleToolboxClicked(): void;
    toggleEditorClicked(): void;
    private updateIsValid;
    toggleReadonlyClicked(): void;
    onSelectedStepIdChanged(selectedStepId: string | null): void;
    objectKeys: {
        (o: object): string[];
        (o: {}): string[];
    };
    isBoolean(value: any): boolean;
    isNumber(value: any, key: string, stepType: string): boolean;
    getHintForProperty(stepType: string, key: string): string | undefined;
    getLabelForProperty(stepType: string, key: string): string | undefined;
    isMap(value: any): value is Record<string, any>;
    editMap(properties: Properties, name: string, context: StepEditorContext): void;
    isStringRecord(value: unknown): value is Record<string, string>;
    togglePreview(): void;
    viewTransformDefinition(): void;
    findStepById(definition: Definition, stepId: string): StepDefinition | null;
    getBranchNames(branches: Record<string, any[]>): string[];
    openVelocityEditor(properties: Properties, name: string, event: Event, context: StepEditorContext): void;
    updateProperty(properties: Properties, name: string, event: Event | MatSlideToggleChange, context: RootEditorContext | StepEditorContext): void;
    updateNumericProperty(properties: Properties, name: string, event: Event | MatSlideToggleChange, context: RootEditorContext | StepEditorContext): void;
    removeBranch(branches: Branches, index: number, event: Event, context: StepEditorContext): void;
    deleteBranchAtIndex<T>(obj: Record<string, T[]>, index: number): void;
    renameBranchAtIndex<T>(obj: Record<string, T[]>, oldKey: string, newKey: string, context: StepEditorContext): void;
    addBranch(branches: Branches, context: StepEditorContext): void;
    getChoicesForProperty(stepType: string, key: string): string[] | null;
    stepTypeMap: Record<string, Record<string, string>>;
    getChoiceLabel(stepType: string, choice: string): string;
    branchingEnabled(step: Step): boolean;
    onSourceNameChanged(properties: Properties, name: string, sourceName: Event | MatSlideToggleChange, context: RootEditorContext | StepEditorContext): void;
    private accountAttributesCache;
    private loadingStates;
    private loadAccountAttributes;
    getAccountAttributes(editor: any): any[];
    private loadAccountAttributesForSource;
    isAccountAttributeDisabled(editor: any): boolean;
    isLoadingAccountAttributes(editor: any): boolean;
    clearAccountAttributesCache(): void;
    showBranch(step: Step, branchName: string): boolean;
    isRequired(stepName: string, key: string): boolean;
    openMessageDialog(errorMessage: string, title: string): void;
    downloadTransform(): void;
    /**
     * Get example output for a date format pattern
     */
    getDateFormatExample(pattern: string): string;
    /**
     * Generate a basic example from a custom pattern
     */
    private generateExampleFromPattern;
    /**
     * Validate a SimpleDateFormat pattern
     */
    validateDateFormatPattern(pattern: string): {
        isValid: boolean;
        error?: string;
    };
    /**
     * Enhanced property update for date format fields
     */
    updateDateFormatProperty(properties: Properties, name: string, event: Event | MatSlideToggleChange, context: RootEditorContext | StepEditorContext): void;
    /**
     * Check if a date format step should show custom input field
     */
    shouldShowCustomInput(step: any): boolean;
    /**
     * Check if a date format step should show custom output field
     */
    shouldShowCustomOutput(step: Record<string, any>): boolean;
    /**
     * Get the effective input format (custom or selected)
     */
    getEffectiveInputFormat(step: Record<string, any>): string;
    /**
     * Get the effective output format (custom or selected)
     */
    getEffectiveOutputFormat(step: Record<string, any>): string;
    /**
     * Toggle between visual builder and manual expression input
     */
    onDateMathBuilderToggle(properties: any, useBuilder: boolean, context: any): void;
    /**
     * Get operations array for the date math step
     */
    getDateMathOperations(properties: Record<string, any>): any[];
    /**
     * Add a new operation to the date math step
     */
    addDateMathOperation(properties: any, context: any): void;
    /**
     * Remove an operation from the date math step
     */
    removeDateMathOperation(properties: any, index: number, context: any): void;
    /**
     * Update a specific operation property
     */
    updateDateMathOperationAt(properties: any, index: number, field: string, value: any, context: any): void;
    /**
     * Update the expression based on current builder state
     */
    updateDateMathExpression(properties: any, context: any): void;
    /**
     * Get the generated expression for display
     */
    getGeneratedExpression(properties: Record<string, any>): string;
    /**
     * Get a human-readable description of the expression
     */
    getExpressionDescription(properties: any): string;
    /**
     * Parse an existing expression into base date and operations
     */
    parseDateMathExpression(expression: string): {
        baseDate: 'input' | 'now';
        operations: any[];
    };
    /**
     * Validate a date math expression
     */
    validateDateMathExpression(expression: string): {
        isValid: boolean;
        error?: string;
    };
    /**
     * Get example expressions for date math
     */
    getDateMathExamples(): {
        expression: string;
        description: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TransformBuilderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TransformBuilderComponent, "app-transform-builder", never, { "transform": { "alias": "transform"; "required": false; }; }, {}, never, never, true, never>;
}

declare class TransformsComponent implements OnInit {
    private dialog;
    private sdk;
    private router;
    private snackBar;
    title: string;
    transforms: TransformReadV2025[];
    dataSource: MatTableDataSource<TransformReadV2025>;
    displayedColumns: string[];
    loading: boolean;
    hasDataLoaded: boolean;
    transform: TransformReadV2025 | undefined;
    editing: boolean;
    transformBuilder?: TransformBuilderComponent;
    constructor(dialog: MatDialog, sdk: SailPointSDKService, router: Router, snackBar: MatSnackBar);
    ngOnInit(): void;
    private loadTransforms;
    openMessageDialog(errorMessage: string, title: string): void;
    applyFilter(event: Event): void;
    confirmBack(): void;
    onEdit(transform?: TransformReadV2025): void;
    onDelete(transform: TransformReadV2025): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TransformsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TransformsComponent, "app-transforms", never, {}, {}, never, never, true, never>;
}

export { IdentitiesComponent, IdentityDetailViewComponent, REPORT_EXAMPLE_ROUTES, ReportDataService, ReportExampleComponent, SailPointSDKService, SailpointComponentsComponent, SailpointComponentsService, ThemePickerComponent, ThemeService, TransformBuilderComponent, TransformsComponent, createDefinitionFromTransform, deserializeToStep, rootModel, serializeStep };
export type { MyDefinition, ThemeConfig };
