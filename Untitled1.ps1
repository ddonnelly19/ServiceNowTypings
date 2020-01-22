$InaccessibleTypes = @('com.snc.datastructure.GlideElementDataArray', 'com.glide.script.glide_elements.GlideElementPhoneNumber', 'com.snc.apps.glide_elements.GlideElementSourceId',
    'com.snc.apps.glide_elements.GlideElementSourceTable', 'com.glide.vars.GlideElementGlideVar', 'com.glide.script.glide_elements.GlideElementDomainId', 'com.snc.apps.glide_elements.GlideElementSourceName',
    'com.glide.script.glide_elements.GlideElementInternalType', 'com.glide.glideobject.SysClassName', 'com.glide.script.glide_elements.GlideElementDocumentId', 'com.glide.wiki.GlideElementWikiText',
    'com.glide.glideobject.Journal', 'com.glide.glideobject.WeekOfMonth', 'com.glide.glideobject.Translated', 'com.snc.datastructure.GlideElementDataStructure', 'com.glide.glideobject.GlideDuration',
    'com.glide.glideobject.MonthOfYear', 'com.glide.glideobject.GlideDueDate', 'com.glide.glideobject.GlideActionList', 'com.glide.glideobject.GlideDate', 'com.glide.glideobject.GlideDateTime',
    'com.glide.glideobject.DayOfWeek', 'com.glide.glideobject.GlideUserInput', 'com.glide.glideobject.GlideList', 'com.glide.glideobject.ScheduleDateTime', 'com.glide.glideobject.GlideHTML',
    'com.glide.glideobject.GlideTime', 'com.snc.datastructure.GlideElementDataObject', 'com.snc.pa.dc.GlideElementBreakdownElement', 'com.glide.vars.HierarchicalVariables',
    'com.glide.vars.GlideElementHierarchicalVariables', 'com.glide.script.glide_elements.GlideElementSourceTable', 'java.time.YearMonth', 'java.time.ZoneId', 'java.time.Duration',
    'java.time.LocalDate', 'java.time.LocalDateTime', 'java.time.ZonedDateTime', 'java.time.Year', 'java.time.LocalTime', 'java.time.MonthDay', 'java.lang.StringBuilder',
    'java.lang.Number', 'org.mozilla.javascript.FunctionObject', 'org.mozilla.javascript.ScriptableObject', "com.glide.Glide","com.glide.monitor.AbstractBucketCollector","com.glide.db.domain.AbstractDomainProvider",
    "com.glide.execution_plan.AbstractExecutionPlan","com.glide.listener.AbstractListener","com.glide.ui.portal.AbstractRenderer","com.glide.script.Action","com.glide.ui.action.ActionManager",
    "com.glide.schedules.AJAXScheduleItem","com.glide.schedules.AJAXSchedulePage","com.glide.alerts.AlertActions","com.glideapp.questionset.AbstractChoiceListQuestion","com.glideapp.ecc.ADSILoader",
    "com.glideapp.google_maps.AJAXMapPage","com.glideapp.servicecatalog.CalculationHelper","com.glideapp.servicecatalog.Cart","com.glideapp.servicecatalog.CartItem",
    "com.glideapp.servicecatalog.CatalogCategoryBatcher","com.glideapp.servicecatalog.CatalogItem","com.glideapp.servicecatalog.Category","com.glideapp.servicecatalog.CategoryPopper",
    "com.glideapp.servicecatalog.CatItemPopper","com.glideapp.chart.ChartParameters","com.glideapp.live.db.ChatRoom","com.glideapp.live.db.ChatRoom.Error","com.glideapp.questionset.CheckBoxQuestion",
    "com.glideapp.ecc.CMDBHelper","com.glideapp.ecc.CMDBSoftwareHelper","com.glideapp.questionset.ContainerAwareQuestionSet","com.glideapp.workflow.ui.ContextDiagramProcessor",
    "com.glideapp.questionset.DateQuestion","com.glideapp.questionset.DateTimeQuestion","com.glideapp.servicecatalog.DeliveryPlan","com.glideapp.ecc.ECCInputMessage","com.glideapp.ecc.ECCOutputMessage",
    "com.glideapp.ecc.ECCQueueConnector","com.glideapp.ecc.ECCQueueProcessor","com.glideapp.ecc.ECCResponseMessage","com.glideapp.live_feed.HTMLTransformers.ExpandableText",
    "com.glideapp.servicecatalog.ExpertPanelCatalogOrder","com.glideapp.servicecatalog.Fixes","com.glideapp.home.Home","com.glideapp.home.HomePage","com.glideapp.home.HomePageFactory",
    "com.glideapp.ecc.IECC","com.glideapp.servicecatalog.IOUpgrade","com.glideapp.servicecatalog.ItemOptionsQuestionSet","com.glideapp.jms.JMSECCReceiver","com.glideapp.jms.JMSECCSender",
    "com.glideapp.knowledge.KBIncludes","com.glide.sys.Application","com.glide.processors.ApplicationModule","com.glideapp.questionset.ListCollectorQuestion","com.glideapp.live_feed.LiveFeedEventHandler",
    "com.glideapp.live_feed.LiveFeedJournalWriter","com.glideapp.live_feed.LiveFeedUIAction","com.glideapp.live_common.LiveProfile", "com.glideapp.live.LiveUtils",
    "com.glideapp.questionset.LookupSelectQuestion","com.glideapp.live_feed.MessageTag","com.glideapp.servicecatalog.OrderGuide","com.glideapp.ecc.ccmdb.ProcessQueue",
    "com.glideapp.questionset.Question","com.glideapp.questionset.QuestionChoice","com.glideapp.ecc.QueueHelper","com.glideapp.ecc.QueueReader","com.glideapp.questionset.ReferenceQuestion",
    "com.glideapp.servicecatalog.RequestItemWorkflow","com.glideapp.servicecatalog.RequestNew","com.glideapp.servicecatalog.ScriptHelper","com.glideapp.servicecatalog.SecurityMask",
    "com.glideapp.questionset.SequencedQuestionSet","com.glideapp.servicecatalog.TaskApprovalHelper","com.glideapp.live_feed.TimeAgo","com.glideapp.version.UpdateVersion",
    "com.glideapp.survey.UpgradeQuestions","com.glideapp.servicecatalog.valve.ValveProcessor","com.glideapp.servicecatalog.variables.Variable","com.glideapp.servicecatalog.variables.VariablePoolQuestionSet",
    "com.glideapp.wizard.WizardIntercept","com.glideapp.ecc.WMILoader","com.glideapp.workflow.Workflow","com.glideapp.workflow.WorkflowHelper","com.glideapp.questionset.YesNoQuestion",
    "com.glide.db.explain.AQueryExplanation", "com.glide.db.auxiliary.Archiver","com.glide.db.auxiliary.ArchiveRecord","com.glide.db.auxiliary.ArchiveRestore","com.glide.db.auxiliary.ArchiveStatus",
    "com.glide.db.auxiliary.ArchiveTable","com.glide.schedule.recurrence.ARecurrence","com.glide.lucene.attachments.AttachmentIndexDocument","com.glide.lucene.attachments.AttachmentIndexTypes",
    "com.glide.util.GlideAttributes","com.glide.audit.AuditDelete","com.glide.script.Auditor","com.glide.util.AutomationEncrypter","com.glide.ui.jelly.tags.BaseTag",
    "com.glide.db.impex.Bootstrap","com.glide.util.BoundedIntProperty","com.glide.sys.cache.CacheManager","com.glide.schedule.GlideCalendar","com.glide.calendar.GlideCalendarWeekEntry",
    "com.glide.ui.CanceledUITransaction","com.glide.db.CascadeFromDelete","com.glide.catalog.cloner.CatalogCloneWorker","com.glide.channel.Channel","com.glide.channel.ChannelManager",
    "com.glide.channel.ChannelMessage","com.glide.ui.chart.dataset.ChartFieldColors","com.glide.ui.chart.ChartGeneratorFactory","com.glide.ui.chart.dataset.ChartUtil",
    "com.glide.ui.chart.dataset.ChartValue","com.glide.util.Checksum","com.glide.choice.Choice","com.glide.choice.ChoiceList","com.glide.choice.ChoiceListGenerator",
    "com.glide.choice.ChoiceListSet","com.glide.update.saver.ChoiceListUpdateSaver","com.glide.client_transaction.ClientBrowserTimes","com.glide.client_transaction.ClientNetworkTimes",
    "com.glide.cluster.ClusterMessage","com.glide.cluster.ClusterState","com.glide.cluster.ClusterSynchronizer","com.glide.cms.CMSLinkHelper","com.glide.cms.CMSPageLink",
    "com.glide.util.CollectionEnumerator","com.glide.ui.CollectionQueryCalculator","com.glide.update.collisions.CollisionDetector","com.glide.db.impex.ColumnAttributes","com.glide.misc.CompanyResolver",
    "com.glide.script.Compiler","com.glide.db.CompositeElement","com.glide.notification.Configuration","com.glide.cms.ContentConfig","com.glide.cms.ContentPage","com.glide.cms.ContentSite",
    "com.glide.cms.ContentType","com.glide.db_context_menu.ContextMenu","com.glide.db_context_menu.ContextMenuItem","com.glide.sys.security.ContextualSecurityManager","com.glide.script.GlideController",
    "com.glide.currency.Converter","com.glide.ui.CookieMan","com.glide.util.Counter","com.glide.communications.crypto.Credentials","com.glide.security.CryptoService",
    "com.glide.generators.CSVExporter","com.glide.script.api.CustomerScriptFixer","com.glide.db.DatabaseVerifier","com.glide.database_views.DatabaseViewLink","com.glide.db.impex.datasource.DataSource",
    "com.glide.util.DateUtil","com.glide.db.DBAction","com.glide.db.DBAggregateQuery","com.glide.db.DBAggregateUtil","com.glide.secondary_db_pools.DBCategoryDebug",
    "com.glide.db.change.DBChangeManager","com.glide.db.DBCompositeAction","com.glide.db.DBConfiguration","com.glide.db.DBConfigurationManager","com.glide.db.DBConfigurationManagerEventHandler",
    "com.glide.db.DBConfigurationParms","com.glide.db.DBConfigurationV2Migrator","com.glide.db.pool.DBConnection","com.glide.db.pool.DBConnectionPool","com.glide.db.pool.DBConnectionPooler",
    "com.glide.db.DBDelete","com.glide.db.DBI","com.glide.db_image.DBImageProvider","com.glide.db.rdbms.mysql.DBIMySQL","com.glide.db.DBIndex","com.glide.certificates.DBKeyStoreFactory",
    "com.glide.ui.jelly.tags.form.DBMacro","com.glide.db.DBMicroStats","com.glide.db.DBMultiTargetAction","com.glide.db.DBObjectManager","com.glide.db.DBObjectToken",
    "com.glide.secondary_db_pools.DBPoolTest","com.glide.db.DBPropertiesConfig","com.glide.db.DBQuery","com.glide.db.DBTypes","com.glide.db.DBUpdate","com.glide.db.DBUtil",
    "com.glide.db.DBView","com.glide.jsdebug.DebugEvaluator","com.glide.update.saver.DefaultUpdateSaver","com.glide.diagrammer.Diagram","com.glide.diagrammer.DiagramAction",
    "com.glide.diagrammer.DiagramEdge","com.glide.diagrammer.DiagramElement","com.glide.diagrammer.DiagramNode","com.glide.dist.upgrade.runner.DistUpgradeRunner","com.glide.util.GlideDocument",
    "com.glide.db.domain.Domain","com.glide.db.domain.DomainDisplay","com.glide.db.domain.DomainHierarchy","com.glide.db.domain.DomainNumberProvider","com.glide.db.domain.DomainPathDisplay",
    "com.glide.db.domain.DomainPathProvider","com.glide.db.domain.DomainSpoolProvider","com.glide.db.domain.DomainSupport","com.glide.db.domain.DomainTree","com.glide.db.domain.DomainUtil",
    "com.glide.db.domain.DomainValidator","com.glide.currency.ECBDownloader","com.glide.db.impex.ECCQueueTransformer","com.glide.script.GlideElement","com.glide.db.ElementDescriptor",
    "com.glide.util.ElementIterator","com.glide.script.glide_elements.GlideElementUserImage","com.glide.script.GlideElementXMLSerializer","com.glide.notification.Email",
    "com.glide.notification.outbound.EmailAction","com.glide.notification.outbound.EmailFormatter","com.glide.notification.inbound.EmailInbound","com.glide.notification.outbound.EmailOutbound",
    "com.glide.notification.inbound.EmailReader","com.glide.notification.outbound.EmailSender","com.glide.notification.EmailWatermark","com.glide.ui.jelly.Emitter","com.glide.util.Encrypter",
    "com.glide.sys.EncryptionContext","com.glide.sys.security.EncryptionContextCipher","com.glide.sys.security.EncryptionWrapperDB","com.glide.sys.security.EncryptionWrapperDBAdmin",
    "com.glide.sys.security.EncryptionWrapperNAE","com.glide.sys.security.EncryptionWrapperNAEAdmin","com.glide.escalation.EscalationManager","com.glide.job.EscalationTimerJobMarkII",
    "com.glide.script.Evaluator","com.glide.policy.Event","com.glide.policy.EventManager","com.glide.generators.ExcelExporter","com.glide.db.impex.ExcelLoader2",
    "com.glide.execution_plan.ExecutionPlan","com.glide.ui.jelly.GlideExpressionWrapper","com.glide.sys.ExtensionPoint","com.glide.processors.FieldList","com.glide.script.proxy.File",
    "com.glide.util.FileUtil","com.glide.script.Filter","com.glide.script.FilterList","com.glide.fixes.FixCatalogPlans","com.glide.fixes.FixDeliveryPlans","com.glide.fixes.FixGroups",
    "com.glide.fixes.FixItemOptionsAgain","com.glide.fixes.FixRules","com.glide.fixes.FixSpellCheck","com.glide.fixes.FixStuff","com.glide.fixes.FixUsers","com.glide.ui.GlideForm",
    "com.glide.ui.GlideFormCommon","com.glide.ui.GlideFormulator","com.glide.report.Gauge","com.glide.sys.util.Governor","com.glide.util.GlideGregorianCalendar","com.glide.sys.Group",
    "com.glide.ui.jelly.tags.form.GroupByListTag","com.glide.util.Guid","com.glide.glideobject.HierarchicalReference","com.glide.audit.HistorySet","com.glide.ui.jelly.tags.mergedata.HistoryTag2",
    "com.glide.util.HostUtil","com.glide.communications.HTTPClient","com.glide.communications.HTTPRequest","com.glide.communications.HTTPResponse","com.glide.ui.I18NStyle",
    "com.glide.policy.ICALUtil","com.glide.util.IConstants","com.glide.util.IGlideRecord","com.glide.script.ImageLoader","com.glide.sys.Impersonate","com.glide.db.impex.ImportLog",
    "com.glide.db.impex.ImportMap","com.glide.db.impex.ImportMapField","com.glide.system_import_set.ImportSet","com.glide.system_import_set.ImportSetLoader","com.glide.system_import_set.ImportSetRun",
    "com.glide.system_import_set.ImportSetTransformer","com.glide.system_import_set.ImportSetTransformerWorker","com.glide.db.IndexDescriptor","com.glide.db.IndexUtils",
    "com.glide.glideobject.IntegerTime","com.glide.script.InternalElementTypeChoiceList","com.glide.ui.monitor.InternalMonitor","com.glide.ui.monitor.IOMonitor","com.glide.db.IOStats",
    "com.glide.util.IPAddressUtil","com.glide.util.IQueryCondition","com.glide.db.meta.IRow","com.glide.db.ir.IRQuerySummary","com.glide.db.ir.IRQuerySummarySimple",
    "com.glide.sys.security.ISecurityManager","com.glide.db.access.ITableIterator","com.glide.db.impex.JDBCLoader","com.glide.db.impex.JDBCProbeTestWorker","com.glide.ui.jelly.GlideJellyContext",
    "com.glide.ui.jelly.JellyRunner","com.glide.xmpp.JID","com.glide.autotester.JSTestUtil","com.glide.script.JSUtil","com.glide.labels.LabelEventHandler","com.glide.db.LabelGenerator",
    "com.glide.labels.LabelUtil","com.glide.sys.ldap.LDAP","com.glide.sys.ldap.LDAPConfig","com.glide.sys.ldap.LDAPConfigurations","com.glide.sys.ldap.LDAPErrorAnalyzer",
    "com.glide.sys.ldap.LDAPGroups","com.glide.sys.ldap.LDAPRefresh","com.glide.sys.ldap.LDAPResult","com.glide.sys.ldap.LDAPTarget","com.glide.sys.ldap.LDAPTransformQueue",
    "com.glide.sys.ldap.LDAPUsers","com.glide.sys.ldap.LDAPUserUpdate","com.glide.list_v2.ListGroupProperties","com.glide.ui.ListLabel","com.glide.glideobject.GlideListM2MBacking",
    "com.glide.list_v2.ListProperties","com.glide.ui.ListSearchQuery","com.glide.db.impex.Loader","com.glide.load_test.LoadTestDirector","com.glide.sys.GlideLocale",
    "com.glide.currency.LocaleLoader","com.glide.script.Lock","com.glide.util.Log","com.glide.util.LogCleanup","com.glide.log_file.LogFileReader","com.glide.sys.cache.LRUCache",
    "com.glide.lucene.TextIndexEvent","com.glide.util.MarkupWriter","com.glide.ui.monitor.MemoryActive","com.glide.ui.monitor.MemoryCache","com.glide.script.GlideMemoryRecord",
    "com.glide.ui.monitor.MemorySwap","com.glide.util.MemoryTable","com.glide.ui.monitor.MemoryTotal","com.glide.script.MetaData","com.glide.script.MIDServerInfoAccessor",
    "com.glide.ui.MobileExtensions","com.glide.sys.Module","com.glide.db.MultipleAction","com.glide.db.MultipleDelete","com.glide.db.MultipleInsert","com.glide.db.MultipleUpdate",
    "com.glide.sys.lock.Mutex","com.glide.sys.stats.MySQLWatch","com.glide.script.glide_elements.GlideNumber","com.glide.db.NumberManager","com.glide.glideobject.GlideObjectManager",
    "com.glide.util.ObjectUtil","com.glide.sorting.OrderingDefinitionCreator","com.glide.sorting.OrderingManager","com.glide.ui.io.GlideOutputWriter","com.glide.ui.io.GlideOutputWriterFactory",
    "com.glide.script.OverLoadedChoices","com.glide.ui.monitor.PartitionMonitor","com.glide.ui.chart.dataset.PivotTableSummaryTableWriter","com.glide.sys.Plugin","com.glide.sys.PluginManager",
    "com.glide.sys.PluginManagerWorker","com.glide.sys.PluginUtils","com.glide.notification.inbound.POP3Reader","com.glide.job.POP3ReaderJob","com.glide.ui.Popup",
    "com.glide.currency.PriceGenerator","com.glide.currency.PriceLoader","com.glide.processors.Processor","com.glide.util.ProcessRunner","com.glide.worker.ProgressMonitor",
    "com.glide.worker.ProgressWorker","com.glide.util.GlideProperties","com.glide.util.GlidePropertiesDB","com.glide.util.GlideProperty","com.glide.ui.PublicPage",
    "com.glide.misc.QueryBreadcrumbs","com.glide.db.conditions.QueryCondition","com.glide.ui.jelly.tags.form.QueryFormatter","com.glide.db.QueryString","com.glide.db.QueryTerm",
    "com.glide.script.GlideRecord","com.glide.sys.RecordCache","com.glide.misc.RecordEnsurer","com.glide.script.GlideRecordFactory","com.glide.script.GlideRecordKeySetLoader",
    "com.glide.script.RecordLock","com.glide.calendar.RecordPopupGenerator","com.glide.script.GlideRecordRollback","com.glide.script.GlideRecordSet","com.glide.script.GlideRecordSimpleSerializer",
    "com.glide.script.GlideRecordXMLSerializer","com.glide.script.ReferenceField","com.glide.util.RegexUtil","com.glide.fixes.RegisterEscalationEvents","com.glide.misc.RelatedListReconciler",
    "com.glide.sys.Relationship","com.glide.db.Relationships","com.glide.sys.RelationshipUtil","com.glide.communications.RemoteGlideRecord","com.glide.ui.RenderProperties",
    "com.glide.util.ReplaceUpdateFiles","com.glide.replicator.ReplicationEngine","com.glide.report.Report","com.glide.script.ReportChoiceList","com.glide.report.ReportViewManagement",
    "com.glide.util.RequestMap","com.glide.update.RevertToOutOfBox","com.glide.script.GlideRhinoEnvironment","com.glide.script.GlideRhinoHelper","com.glide.script.RhinoScope",
    "com.glide.script.GlideRhinoScopeHandler","com.glide.autotester.RhinoTestCase","com.glide.rrdb.alerts.RRDBAlertProcessor","com.glide.rrdb.RRDBDefinition","com.glide.job.RunScriptJob",
    "com.glide.schedules.Schedule","com.glide.schedules.ScheduleDateTimeSpan","com.glide.schedules.ScheduleItem","com.glide.schedule.GlideScheduler","com.glide.schedules.ScheduleTimeMap",
    "com.glide.schedules.ScheduleTimeSpan","com.glide.script.ChoiceList","com.glide.worker.ScriptedProgressWorker","com.glide.script.ScriptEvaluator","com.glide.script.GlideScriptGlobals",
    "com.glide.listener.ScriptListener","com.glide.processors.ScriptProcessor","com.glide.script.GlideRecordUtil","com.glide.script.GlideSystemUtilDB","com.glide.ui.ViewManager",
    "com.glide.script.ScriptWriter","com.glide.text_search.SearchQueryFormatter","com.glide.secondary_db_pools.SecondaryDatabaseBehindnessChecker","com.glide.secondary_db_pools.SecondaryDatabaseConfiguration",
    "com.glide.sys.security.GlideSecurityManager","com.glide.sys.security.SecurityQueryCalculator","com.glide.util.SecurityUtils","com.glide.sys.lock.SelfCleaningMutex",
    "com.glide.service_api.ServiceAPIWrapper","com.glide.ui.GlideServlet","com.glide.ui.GlideServletRequest","com.glide.ui.GlideServletResponse","com.glide.ui.ServletStatus",
    "com.glide.sys.GlideSession","com.glide.sys.SessionDebug","com.glide.ui.Sessions","com.glide.script.GlideSessionSandbox","com.glide.util.ShellCommand",
    "com.glide.db.change.command.SimmerDown","com.glide.db.change.command.SimmerUp","com.glide.util.SimpleDateFormatEx","com.glide.communications.SimpleHTTPClient",
    "com.glide.listener.SimpleScriptListener","com.glide.notification.outbound.SMTPConnection","com.glide.notification.outbound.SMTPSender","com.glide.job.SMTPSenderJob",
    "com.glide.communications.soap.SOAPDocument","com.glide.communications.soap.SOAPRequest","com.glide.communications.soap.SOAPResponse","com.glide.processors.soap.SOAPSecurity",
    "com.glide.communications.soap.SOAPSigner","com.glide.script.proxy.Socket","com.glidesoft.util.xml.GlideAttributesImpl","com.glidesoft.util.xml.XMLMemoryTable",
    "com.glide.monitor.sql.SQLChildMonitor","com.glide.ui.diagnostics.SQLDebug","com.glide.monitor.sql.SQLDeleteMonitor","com.glide.monitor.sql.SQLInsertMonitor",
    "com.glide.monitor.sql.SQLResponseMonitor","com.glide.monitor.sql.SQLSelectMonitor","com.glide.monitor.sql.SQLUpdateMonitor","com.glide.communications.SSHClient","com.glide.sys.GlideStack",
    "com.glide.sys.stats.Statistician","com.glide.monitor.StatsInfo","com.glide.util.GlideStatus","com.glide.util.StopWatch","com.glide.db.meta.StorageUtils","com.glide.sys.cache.StringCache",
    "com.glide.util.StringInputStream","com.glide.collections.StringList","com.glide.util.StringUtil","com.glide.db.conditions.SubQuery","com.glide.notification.substitution.SubstituteURL",
    "com.glide.ui.chart.dataset.SummaryTableGroupReader","com.glide.ui.chart.dataset.SummaryTableOrderedReader","com.glide.ui.chart.dataset.SummaryTableReader","com.glide.ui.chart.dataset.SummaryTableWriter",
    "com.glide.sys.cache.SynchronizedLRUCache","com.glide.ui.SysAttachment","com.glide.ui.SysAttachmentInputStream","com.glide.monitor.threads.SysBRThreadMonitor","com.glide.script.SysChoice",
    "com.glide.monitor.threads.SysConcurrencyMonitor","com.glide.monitor.threads.SysCPUThreadMonitor","com.glide.sys.util.SysDateUtil","com.glide.monitor.threads.SysDBThreadMonitor",
    "com.glide.db.SysField","com.glide.sys.util.SysFileUtil","com.glide.ui.SysForm","com.glide.ui.SysForms","com.glide.ui.SysList","com.glide.ui.SysListControl","com.glide.sys.SysLog",
    "com.glide.db.SYSMany2Many","com.glide.ui.SysMessage","com.glide.monitor.threads.SysNetThreadMonitor","com.glide.ui.SysRelatedList","com.glide.ui.SysSection",
    "com.glide.sys.util.SysSemaphore","com.glide.script.GlideSystem","com.glide.script.system.GlideSystemDateUtil","com.glide.util.SystemUtil","com.glide.script.system.GlideSystemUtilDB",
    "com.glide.script.system.GlideSystemUtilScript","com.glide.monitor.threads.SysThreadMonitor","com.glide.ui.SysUserList","com.glide.db.meta.Table","com.glide.script.TableChoiceList",
    "com.glide.misc.TableCleaner","com.glide.job.TableCleanerJob","com.glide.db.impex.TableCreator","com.glide.db.TableDescriptor","com.glide.db.auxiliary.TableGroupMover",
    "com.glide.db.TableManager","com.glide.db.auxiliary.TableMover","com.glide.db.table.TableParentChange","com.glide.db.table.TableParentColumnChange","com.glide.execution_plan.TaskToken",
    "com.glide.script.Template","com.glide.autotester.GlideTestAgent","com.glide.ts.event.TextIndexEvent","com.glide.ui.GlideThreadAttributes","com.glide.util.ThreadUtil",
    "com.glide.schedules.TimelineFrameSeparator","com.glide.schedules.TimelineItem","com.glide.schedules.TimelineSpan","com.glide.startup.TomcatHelper","com.glide.sys.Transaction",
    "com.glide.sys.TransactionManager","com.glide.audit.TransferAuditDataHelper","com.glide.db.impex.transformer.Transformer","com.glide.ui.TreePicker","com.glide.ts.cluster.TSAnalysisViewer",
    "com.glide.ts.cluster.TSAnalyticsProcessor","com.glide.ts.trends.TSChainsHandler","com.glide.ts.trends.TSChainsLoader","com.glide.ts.trends.TSChainsPusher","com.glide.ts.trends.TSChainsSummarizer",
    "com.glide.ts.cluster.TSClusterDefinitions","com.glide.ts.util.TSDebug","com.glide.ts.util.TSDidYouMean","com.glide.ts.trends.TSGlobalKeywordSummarizer","com.glide.ts.stats.TSIndexStatistician",
    "com.glide.ts.stats.TSIndexStopGenerator","com.glide.ts.indexer.TSIndexTables","com.glide.ts.trends.TSKeywordHandler","com.glide.ts.trends.TSKeywordLoader","com.glide.ts.trends.TSKeywordPusher",
    "com.glide.ts.cluster.TSMoversViewer","com.glide.ts.stats.TSSearchStatistician","com.glide.ts.trends.TSSearchSummary","com.glide.ts.util.TSTopSearches","com.glide.ts.util.TSUtil",
    "com.glide.ts.TSVersion","com.glide.ui.action.UIAction","com.glide.ui.Session","com.glide.db.impex.Unloader","com.glide.update.UpdateManager2","com.glide.update.UpdateSet",
    "com.glide.system_update_set.UpdateSetController","com.glide.update.UpdateSetPreviewer","com.glide.update.UpdateSetWorker","com.glide.policy.UpdateSyncher","com.glide.script.UpdateTableChoiceList",
    "com.glide.sys.Upgrade","com.glide.misc.UpgradeArtifactManager","com.glide.update.UpgradeLog","com.glide.update.UpgradeMonitor","com.glide.ui.GlideURI","com.glide.util.GlideURL",
    "com.glide.util.URLUTF8Encoder","com.glide.util.URLUtil","com.glide.sys.User","com.glide.sys.UserAuthenticator","com.glide.sys.UserGroup","com.glide.util.GlideUtil",
    "com.glide.ui.ViewRuleNavigator","com.glide.misc.WarDeleter","com.glide.misc.WarDownloader","com.glide.script.api.GlideWhiteListManager","com.glide.wiki.GlideWikiModel",
    "com.glide.worker.WorkerThread","com.glide.sys.WorkerThreadManager","com.glide.util.WSClient","com.glide.wsdlreader.WSDefinition","com.glide.wsdlreader.GlideWSDLReader",
    "com.glide.choice.XMLChoiceListSerializer","com.glide.util.XMLDocument","com.glide.util.XMLElementIterator","com.glide.processors.xmlhttp.XMLGlideRecordSerializer","com.glide.util.XMLParameters",
    "com.glide.ui.XMLStats","com.glide.processors.xmlhttp.XMLSysMetaSerializer","com.glide.util.XMLUtil","com.glide.util.ZipUtil","com.glide.script.RhinoEnvironment",
    "com.glide.script.RhinoHelper","com.glide.sys.util.SecurelyAccess","com.glide.service_api.ServiceAPI","com.snc.commons.networks.Address32Bit","com.snc.field_normalization.AliasApplier",
    "com.snc.apps.api.AppFiles","com.snc.apps.db.ApplicationFileListener","com.snc.apps.api.AppsAccess","com.snc.apps.api.AppsUI","com.snc.discovery.sensor.ASensor",
    "com.snc.authentication.digest.Authentication","com.snc.cmdb.BaselineCMDB","com.snc.ha.clone.BulkCopy","com.snc.discovery.sensor.ClassifiedProcess","com.snc.discovery.sensor.snmp.Classify",
    "com.snc.ha.clone.CloneController","com.snc.ha.clone.instance.Instance","com.snc.ha.clone.CloneLogger","com.snc.ha.clone.CloneTask","com.snc.ha.clone.CloneUtils",
    "com.snc.field_normalization.db.Configuration","com.snc.field_normalization.Configurations","com.snc.ha.connectivity.ConnectionTest","com.snc.db.clone.change.DBChangeManagerFactoryHA",
    "com.snc.discovery.logging.DeviceHistory","com.snc.discovery.DiscoveryCancel","com.snc.discovery.DiscoveryClassification","com.snc.discovery.logging.DiscoveryLog",
    "com.snc.commons.networks.DiscoveryRanges","com.snc.discovery.DiscoveryRangesDB","com.snc.discovery.database.DiscoveryReconciler","com.snc.discovery.sensor.snmp.DiscoverySNMPClassificatio",
    "com.snc.discovery.DiscoveryUtils","com.snc.ha.clone.instance.DropBackupTablesTask","com.snc.ha.clone.DropTablesTask","com.snc.ec2.EC2Properties","com.snc.cmdb.ECMDBUtil",
    "com.snc.customer_logon.ElrondClient","com.snc.expert.Expert","com.snc.expert.ExpertInstance","com.snc.expert.ExpertPanel","com.snc.field_normalization.db.ExtantDataJob",
    "com.snc.field_normalization.ExtantDataJobState","com.snc.da.gateway.replication.FailoverController","com.snc.apps.file.FileTree","com.snc.da.gateway.GatewayCache",
    "com.snc.da.gateway.clone.GatewayClone","com.snc.da.gateway.GatewayConnectivity","com.snc.da.gateway.replication.GatewayPluginStartup","com.snc.da.gateway.clone.GatewayTruncateHierarchy",
    "com.snc.da.gateway.GlideGateways","com.snc.ha.clone.HAClone","com.snc.ha.connectivity.HAConnectionTest","com.snc.ha.tablecheck.HADatabaseCheck","com.snc.ha.HAPairingUtils",
    "com.snc.ha.HAReplicationController","com.snc.ha.tablecheck.HAReplicationQueueSnapshotBuilder","com.snc.ha.tablecheck.HATableCheck","com.snc.ha.tablecheck.HATableCheckThread",
    "com.snc.ha.tablecheck.HATableQuickCheck","com.snc.ha.tablecheck.HATableRepair","com.snc.ha.HAUtils","com.snc.discovery.utils.Hostname","com.snc.ha.clone.instance.InstanceClone",
    "com.snc.ha.connectivity.InstanceConnectionTest","com.snc.ha.clone.instance.InstanceRollback","com.snc.commons.networks.IPAddressV4","com.snc.commons.networks.IPAddressV6",
    "com.snc.ipauthenticator.IPAuthenticator","com.snc.commons.networks.IPIterator","com.snc.commons.networks.IPList","com.snc.commons.networks.IPMetaCollection","com.snc.commons.networks.IPNetmaskV4",
    "com.snc.commons.networks.IPNetworkV4","com.snc.commons.networks.IPRangeV4","com.snc.jrobin.JRobinGraphDef","com.snc.discovery.Layer7Connections","com.snc.commons.networks.MACAddress",
    "com.snc.commons.networks.MACAddressMfr","com.snc.cmdb.MakeAndModel","com.snc.commons.MIDConfigParameter","com.snc.discovery.MIDServerRangesDB","com.snc.field_normalization.NormalCoalescer",
    "com.snc.field_normalization.Normalizer","com.snc.field_normalization.NormalValueChanger","com.snc.system.NotifySNC","com.snc.on_call_rotation.OnCallRotation",
    "com.snc.field_normalization.PendingValueCollector","com.snc.field_normalization.Preferences","com.snc.discovery.database.PrintServerHelper","com.snc.discovery.Probe",
    "com.snc.discovery.perfmon.ProbeRunTime","com.snc.discovery_automation.RBSensorProcessor","com.snc.ha.ReadTest","com.snc.cmdb.ReclassifyCI","com.snc.cmdb.Relationships",
    "com.snc.db.replicate.ReplicationAdvisor","com.snc.db.replicate.ReplicationEngine","com.snc.db.replicate.ReplicationQueue","com.snc.customer_logon.RequestCredentials",
    "com.snc.jrobin.RrdGlideBackendFactory","com.snc.field_normalization.RuleApplier","com.snc.field_normalization.RuleToPending","com.snc.software_asset_management.SAMCounter",
    "com.snc.ha.clone.instance.ScheduleDropBackupTablesTask","com.snc.discovery.database.ScrapeIANAEnterpriseNumbers","com.snc.discovery.database.ScrapeIEEENICCodes",
    "com.snc.ha.clone.instance.SendNotificationTask","com.snc.discovery.SensorProcessor","com.snc.discovery.SerialNumber","com.snc.discovery.SerialNumberList","com.snc.discovery.SessionMate",
    "com.snc.ha.clone.instance.SimmerControl","com.snc.apps.api.TableEditor","com.snc.db.replicate.TableRotation","com.snc.db.replicate.TableRotationExtension",
    "com.snc.db.replicate.TableRotationExtensions","com.snc.db.replicate.TableRotationWatcher","com.snc.field_normalization.TransformApplier","com.snc.apps.tree.TreeBuilder",
    "com.snc.automation.TriggerSynchronizer","com.snc.field_normalization.db.Value","com.glide.junit.misc.TestExtension","com.glide.ui.UINotification");

$Constructors = @('java.lang.String', 'GlideElement', 'GlideElementEncrypted', 'GlideElementNameValue', 'GlideElementGlideVar', 'GlideElementVariableConditions', 'GlideElementDomainId', 'GlideElementCounter', 'GlideElementPrice',
    'GlideElementCurrency', 'GlideElementTranslatedField', 'GlideElementConditions', 'GlideElementSourceName', 'GlideElementScript', 'GlideElementInternalType', 'GlideElementTranslatedHTML', 'GlideElementURL', 'GlideElementPassword2',
    'GlideElementWorkflowConditions', 'GlideElementShortTableName', 'GlideElementSysClassName', 'GlideElementDocumentId', 'GlideElementDocumentation', 'GlideElementUserImage', 'GlideElementAudio', 'GlideElementTranslatedText',
    'GlideElementWikiText', 'GlideElementCompressed', 'GlideElementPassword', 'GlideElementIcon', 'GlideElementShortFieldName', 'GlideElementFullUTF8', 'java.lang.Boolean', 'GlideElementBoolean', 'GlideElementNumeric',
    'GlideElementGlideObject', 'GlideDate', 'GlideElementDataObject', 'GlideElementVariables', 'GlideElementReference', 'GlideElementReplicationPayload', 'GlideElementBreakdownElement', 'GlideElementWorkflow', 'GlideActionList', 'GlideList',
    'ScheduleDateTime', 'GlideSysList', 'GlideChoiceList', 'GlideXMLDocument', 'GlideElementVariable', 'GlideURI', 'GlideActionURL', 'GlideElementFileAttachment', 'GlideChoice', 'GlideElementPhoneNumber', 'GlideElementRelatedTags',
    'GlideElementDataStructure', 'GlideElementDataArray', 'GlideElementSourceTable', 'GlideDateTime', 'GlideElementSourceId', '', 'GlideUser', 'GlideDuration', 'java.lang.StringBuffer', 'java.util.Map',
    'java.util.List', 'java.util.Set', 'java.util.TimeZone', 'java.lang.Integer', 'java.lang.Long', 'java.lang.Byte', 'java.lang.Float', 'java.lang.Short',
    'java.lang.Double', 'java.lang.Character', 'java.lang.Object', 'Date', 'Boolean', 'String', 'Number', "Glide","GlideAbstractBucketCollector","GlideAbstractDomainProvider","GlideAbstractExecutionPlan",
    "GlideAbstractListener","GlideAbstractRenderer","GlideAction","GlideActionManager","GlideAJAXScheduleItem","GlideAJAXSchedulePage","GlideAlertActions","GlideappAbstractChoiceListQuestion","GlideappADSILoader","GlideappAJAXMapPage",
    "GlideappCalculationHelper","GlideappCart","GlideappCartItem","GlideappCatalogCategoryBatcher","GlideappCatalogItem","GlideappCategory","GlideappCategoryPopper","GlideappCatItemPopper","GlideappChartParameters","GlideappChatRoom",
    "GlideappChatRoom","GlideappCheckBoxQuestion","GlideappCMDBHelper","GlideappCMDBSoftwareHelper","GlideappContainerAwareQuestionSet","GlideappContextDiagramProcessor","GlideappDateQuestion",
    "GlideappLookupSelectQuestion","GlideappMessageTag","GlideappOrderGuide","GlideappProcessQueue","GlideappQuestion","GlideappQuestionChoice","GlideappQueueHelper","GlideappQueueReader","GlideappReferenceQuestion","GlideappRequestItemWorkflow",
    "GlideappRequestNew","GlideappScriptHelper","GlideappSecurityMask","GlideappSequencedQuestionSet","GlideappTaskApprovalHelper","GlideappTimeAgo","GlideappUpdateVersion","GlideappUpgradeQuestions","GlideappValveProcessor","GlideappVariable",
    "GlideappVariablePoolQuestionSet","GlideappWizardIntercept","GlideappWMILoader","GlideappWorkflowHelper","GlideappYesNoQuestion","GlideAQueryExplanation","GlideArchiver","GlideArchiveRecord","GlideArchiveRestore","GlideArchiveStatus",
    "GlideArchiveTable","GlideARecurrence","GlideAttachmentIndexDocument","GlideAttachmentIndexTypes","GlideAttributes","GlideAuditDelete","GlideAuditor","GlideAutomationEncrypter","GlideBaseTag","GlideBootstrap","GlideBoundedIntProperty",
    "GlideCacheManager","GlideCalendar","GlideCalendarWeekEntry","GlideCanceledUITransaction","GlideCascadeFromDelete","GlideCatalogCloneWorker","GlideChannel","GlideChannelManager","GlideChannelMessage","GlideChartFieldColors",
    "GlideChartGeneratorFactory","GlideChartUtil","GlideChartValue","GlideChecksum","GlideChoiceListGenerator","GlideChoiceListSet","GlideChoiceListUpdateSaver","GlideClientBrowserTimes","GlideClientNetworkTimes","GlideClusterMessage",
    "GlideClusterSynchronizer","GlideCMSLinkHelper","GlideCMSPageLink","GlideCollectionEnumerator","GlideCollectionQueryCalculator","GlideCollisionDetector","GlideColumnAttributes","GlideCompanyResolver","GlideCompiler","GlideCompositeElement",
    "GlideConfiguration","GlideContentConfig","GlideContentPage","GlideContentSite","GlideContentType","GlideContextMenu","GlideContextMenuItem","GlideContextualSecurityManager","GlideController","GlideConverter","GlideCookieMan","GlideCounter",
    "GlideCredentials","GlideCryptoService","GlideCSVExporter","GlideCustomerScriptFixer","GlideDatabaseVerifier","GlideDatabaseViewLink","GlideDataSource","GlideDateUtil","GlideDBAction","GlideDBAggregateQuery","GlideDBAggregateUtil",
    "GlideDBCategoryDebug","GlideDBChangeManager","GlideDBCompositeAction","GlideDBConfiguration","GlideDBConfigurationManager","GlideDBConfigurationManagerEventHandler","GlideDBConfigurationParms","GlideDBConfigurationV2Migrator",
    "GlideDBConnection","GlideDBConnectionPool","GlideDBConnectionPooler","GlideDBDelete","GlideDBI","GlideDBImageProvider","GlideDBIMySQL","GlideDBIndex","GlideDBKeyStoreFactory","GlideDBMacro","GlideDBMicroStats","GlideDBMultiTargetAction",
    "GlideDBObjectManager","GlideDBObjectToken","GlideDBPoolTest","GlideDBPropertiesConfig","GlideDBQuery","GlideDBTypes","GlideDBUpdate","GlideDBUtil","GlideDBView","GlideDebugEvaluator","GlideDefaultUpdateSaver","GlideDiagram",
    "GlideDiagramAction","GlideDiagramEdge","GlideDiagramElement","GlideDiagramNode","GlideDistUpgradeRunner","GlideDocument","GlideDomain","GlideDomainDisplay","GlideDomainHierarchy","GlideDomainNumberProvider","GlideDomainPathDisplay",
    "GlideDomainPathProvider","GlideDomainSpoolProvider","GlideDomainSupport","GlideDomainTree","GlideDomainUtil","GlideDomainValidator","GlideECBDownloader","GlideECCQueueTransformer","GlideElementDescriptor","GlideElementIterator",
    "GlideElementXMLSerializer","GlideEmail","GlideEmailAction","GlideEmailFormatter","GlideEmailInbound","GlideEmailOutbound","GlideEmailReader","GlideEmailSender","GlideEmailWatermark","GlideEmitter","GlideEncrypter","GlideEncryptionContext",
    "GlideEncryptionContextCipher","GlideEncryptionWrapperDB","GlideEncryptionWrapperDBAdmin","GlideEncryptionWrapperNAE","GlideEncryptionWrapperNAEAdmin","GlideEscalationManager","GlideEscalationTimerJobMarkII","GlideEvaluator","GlideEvent",
    "GlideEventManager","GlideExcelExporter","GlideExcelLoader2","GlideExecutionPlan","GlideExpressionWrapper","GlideExtensionPoint","GlideFieldList","GlideFile","GlideFileUtil","GlideFilter","GlideFilterList","GlideFixCatalogPlans",
    "GlideFixDeliveryPlans","GlideFixGroups","GlideFixItemOptionsAgain","GlideFixRules","GlideFixSpellCheck","GlideFixStuff","GlideFixUsers","GlideForm","GlideFormCommon","GlideFormulator","GlideGauge","GlideGovernor","GlideGregorianCalendar",
    "GlideGroup","GlideGroupByListTag","GlideGuid","GlideHierarchicalReference","GlideHistorySet","GlideHistoryTag2","GlideHostUtil","GlideHTTPClient","GlideHTTPRequest","GlideHTTPResponse","GlideI18NStyle","GlideICALUtil","GlideIConstants",
    "GlideIGlideRecord","GlideImageLoader","GlideImpersonate","GlideImportLog","GlideImportMap","GlideImportMapField","GlideImportSet","GlideImportSetLoader","GlideImportSetRun","GlideImportSetTransformer","GlideImportSetTransformerWorker",
    "GlideIndexDescriptor","GlideIndexUtils","GlideIntegerTime","GlideInternalElementTypeChoiceList","GlideInternalMonitor","GlideIOStats","GlideIPAddressUtil","GlideIQueryCondition","GlideIRow","GlideIRQuerySummary","GlideIRQuerySummarySimple",
    "GlideISecurityManager","GlideITableIterator","GlideJDBCLoader","GlideJDBCProbeTestWorker","GlideJellyContext","GlideJellyRunner","GlideJID","GlideJSUtil","GlideLabelEventHandler","GlideLabelGenerator","GlideLabelUtil","GlideLDAP",
    "GlideLDAPConfig","GlideLDAPConfigurations","GlideLDAPErrorAnalyzer","GlideLDAPGroups","GlideLDAPRefresh","GlideLDAPResult","GlideLDAPTarget","GlideLDAPTransformQueue","GlideLDAPUsers","GlideLDAPUserUpdate","GlideListGroupProperties",
    "GlideListLabel","GlideListM2MBacking","GlideListProperties","GlideListSearchQuery","GlideLoader","GlideLoadTestDirector","GlideLocale","GlideLocaleLoader","GlideLock","GlideLog","GlideLogCleanup","GlideLogFileReader","GlideLRUCache",
    "GlideLuceneTextIndexEvent","GlideMarkupWriter","GlideMemoryActive","GlideMemoryCache","GlideMemoryRecord","GlideMemorySwap","GlideMemoryTable","GlideMemoryTotal","GlideMetaData","GlideMIDServerInfoAccessor","GlideMobileExtensions",
    "GlideModule","GlideMultipleAction","GlideMultipleDelete","GlideMultipleInsert","GlideMultipleUpdate","GlideMutex","GlideMySQLWatch","GlideNumber","GlideNumberManager","GlideObjectManager","GlideObjectUtil","GlideOrderingDefinitionCreator",
    "GlideOrderingManager","GlideOutputWriter","GlideOutputWriterFactory","GlideOverLoadedChoices","GlidePivotTableSummaryTableWriter","GlidePlugin","GlidePluginManager","GlidePluginManagerWorker","GlidePluginUtils","GlidePOP3Reader",
    "GlidePOP3ReaderJob","GlidePopup","GlidePriceGenerator","GlidePriceLoader","GlideProcessor","GlideProgressMonitor","GlideProgressWorker","GlideProperties","GlidePropertiesDB","GlideProperty","GlidePublicPage","GlideQueryBreadcrumbs",
    "GlideQueryCondition","GlideQueryFormatter","GlideQueryString","GlideQueryTerm","GlideRecord","GlideRecordCache","GlideRecordEnsurer","GlideRecordFactory","GlideRecordKeySetLoader","GlideRecordLock","GlideRecordPopupGenerator",
    "GlideRecordRollback","GlideRecordSet","GlideRecordSimpleSerializer","GlideRecordXMLSerializer","GlideReferenceField","GlideRegexUtil","GlideRegisterEscalationEvents","GlideRelatedListReconciler","GlideRelationship","GlideRelationships",
    "GlideRelationshipUtil","GlideRemoteGlideRecord","GlideRenderProperties","GlideReplaceUpdateFiles","GlideReplicationEngine","GlideReport","GlideReportChoiceList","GlideReportViewManagement","GlideRequestMap","GlideRevertToOutOfBox",
    "GlideRhinoEnvironment","GlideRhinoHelper","GlideRhinoScopeHandler","GlideRRDBAlertProcessor","GlideRRDBDefinition","GlideRunScriptJob","GlideSchedule","GlideScheduleDateTime","GlideScheduleDateTimeSpan","GlideScheduleItem","GlideScheduler",
    "GlideScheduleTimeMap","GlideScheduleTimeSpan","GlideScriptChoiceList","GlideScriptedProgressWorker","GlideScriptEvaluator","GlideScriptGlobals","GlideScriptListener","GlideScriptProcessor","GlideScriptRecordUtil","GlideScriptSystemUtilDB",
    "GlideScriptViewManager","GlideScriptWriter","GlideSearchQueryFormatter","GlideSecondaryDatabaseBehindnessChecker","GlideSecondaryDatabaseConfiguration","GlideSecurityManager","GlideSecurityQueryCalculator","GlideSecurityUtils",
    "GlideSelfCleaningMutex","GlideServiceAPIWrapper","GlideServlet","GlideServletRequest","GlideServletResponse","GlideServletStatus","GlideSession","GlideSessionDebug","GlideSessions","GlideSessionSandbox","GlideSimmerDown","GlideSimmerUp",
    "GlideSimpleDateFormatEx","GlideSimpleHTTPClient","GlideSimpleScriptListener","GlideSMTPConnection","GlideSMTPSender","GlideSMTPSenderJob","GlideSOAPDocument","GlideSOAPRequest","GlideSOAPResponse","GlideSOAPSecurity","GlideSOAPSigner",
    "GlideSocket","GlidesoftGlideAttributesImpl","GlidesoftXMLMemoryTable","GlideSQLDebug","GlideSSHClient","GlideStack","GlideStatistician","GlideStatsInfo","GlideStatus","GlideStopWatch","GlideStorageUtils","GlideStringCache",
    "GlideStringInputStream","GlideStringList","GlideStringUtil","GlideSubQuery","GlideSubstituteURL","GlideSummaryTableGroupReader","GlideSummaryTableOrderedReader","GlideSummaryTableReader","GlideSummaryTableWriter","GlideSynchronizedLRUCache",
    "GlideSysAttachment","GlideSysAttachmentInputStream","GlideSysBRThreadMonitor","GlideSysChoice","GlideSysConcurrencyMonitor","GlideSysCPUThreadMonitor","GlideSysDateUtil","GlideSysDBThreadMonitor","GlideSysField","GlideSysFileUtil",
    "GlideSysForm","GlideSysForms","GlideSysListControl","GlideSysLog","GlideSYSMany2Many","GlideSysMessage","GlideSysNetThreadMonitor","GlideSysRelatedList","GlideSysSection","GlideSysSemaphore","GlideSystem","GlideSystemDateUtil",
    "GlideSystemUtil","GlideSystemUtilDB","GlideSystemUtilScript","GlideSysThreadMonitor","GlideSysUserList","GlideTable","GlideTableChoiceList","GlideTableCleaner","GlideTableCleanerJob","GlideTableCreator","GlideTableDescriptor",
    "GlideTableGroupMover","GlideTableManager","GlideTableMover","GlideTableParentChange","GlideTableParentColumnChange","GlideTaskToken","GlideTemplate","GlideTextIndexEvent","GlideThreadAttributes","GlideThreadUtil","GlideTransaction","GlideTransactionManager","GlideTransferAuditDataHelper","GlideTransformer","GlideTreePicker","GlideTSAnalysisViewer","GlideTSAnalyticsProcessor","GlideTSChainsHandler",
    "GlideTSChainsLoader","GlideTSChainsPusher","GlideTSChainsSummarizer","GlideTSClusterDefinitions","GlideTSDebug","GlideTSDidYouMean","GlideTSGlobalKeywordSummarizer","GlideTSIndexStatistician","GlideTSIndexStopGenerator","GlideTSIndexTables",
    "GlideTSKeywordHandler","GlideTSKeywordLoader","GlideTSKeywordPusher","GlideTSMoversViewer","GlideTSSearchStatistician","GlideTSSearchSummary","GlideTSTopSearches","GlideTSUtil","GlideTSVersion","GlideUIAction","GlideUISession","GlideUnloader",
    "GlideUpdateManager2","GlideUpdateSet","GlideUpdateSetController","GlideUpdateSetPreviewer","GlideUpdateSetWorker","GlideUpdateSyncher","GlideUpdateTableChoiceList","GlideUpgrade","GlideUpgradeArtifactManager","GlideUpgradeLog",
    "GlideUpgradeMonitor","GlideURL","GlideURLUTF8Encoder","GlideURLUtil","GlideUserAuthenticator","GlideUserGroup","GlideUtil","GlideViewRuleNavigator","GlideWarDeleter","GlideWarDownloader","GlideWhiteListManager","GlideWikiModel",
    "GlideWorkerThread","GlideWorkerThreadManager","GlideWSClient","GlideWSDefinition","GlideWSDLReader","GlideXMLChoiceListSerializer","GlideXMLElementIterator","GlideXMLGlideRecordSerializer","GlideXMLParameters","GlideXMLStats",
    "GlideXMLSysMetaSerializer","GlideXMLUtil","GlideZipUtil","RhinoEnvironment","RhinoHelper","SecurelyAccess","ServiceAPI","SncAddress32Bit","SncAliasApplier","SncAppFiles","SncApplicationFileListener","SncAppsAccess","SncAppsUI",
    "SncAuthentication","SncBaselineCMDB","SncBulkCopy","SncClassifiedProcess","SncClassify","SncCloneController","SncCloneInstance","SncCloneLogger","SncCloneTask","SncCloneUtils","SncConfiguration","SncConfigurations","SncConnectionTest",
    "SncDBChangeManagerFactoryHA","SncDeviceHistory","SncDiscoveryCancel","SncDiscoveryClassification","SncDiscoveryLog","SncDiscoveryRanges","SncDiscoveryRangesDB","SncDiscoveryReconciler","SncDiscoverySNMPClassification","SncDiscoveryUtils",
    "SncDropBackupTablesTask","SncDropTablesTask","SncEC2Properties","SncECMDBUtil","SncElrondClient","SncExpert","SncExpertInstance","SncExpertPanel","SncExtantDataJob","SncExtantDataJobState","SncFailoverController","SncFileTree",
    "SncGatewayCache","SncGatewayClone","SncGatewayPluginStartup","SncGatewayTruncateHierarchy","SncHAClone","SncHAConnectionTest","SncHADatabaseCheck","SncHAPairingUtils","SncHAReplicationController","SncHAReplicationQueueSnapshotBuilder",
    "SncHATableCheck","SncHATableCheckThread","SncHATableQuickCheck","SncHATableRepair","SncHAUtils","SncHostname","SncInstanceClone","SncInstanceConnectionTest","SncInstanceRollback","SncIPAddressV4","SncIPAddressV6","SncIPAuthenticator",
    "SncIPIterator","SncIPList","SncIPMetaCollection","SncIPNetmaskV4","SncIPNetworkV4","SncIPRangeV4","SncLayer7Connections","SncMACAddress","SncMACAddressMfr","SncMakeAndModel","SncMIDConfigParameter","SncMIDServerRangesDB","SncNormalCoalescer",
    "SncNormalizer","SncNormalValueChanger","SncNotifySNC","SncPendingValueCollector","SncPreferences","SncPrintServerHelper","SncProbe","SncProbeRunTime","SncRBSensorProcessor","SncReadTest","SncReclassifyCI","SncRelationships",
    "SncReplicationAdvisor","SncReplicationEngine","SncReplicationQueue","SncRequestCredentials","SncRuleApplier","SncRuleToPending","SncSAMCounter","SncScheduleDropBackupTablesTask","SncScrapeIANAEnterpriseNumbers","SncScrapeIEEENICCodes",
    "SncSendNotificationTask","SncSensorProcessor","SncSerialNumber","SncSerialNumberList","SncSessionMate","SncSimmerControl","SncTableEditor","SncTableRotation","SncTableRotationExtension","SncTableRotationExtensions","SncTableRotationWatcher",
    "SncTransformApplier","SncTreeBuilder","SncTriggerSynchronizer","SncValue","TestExtension","UINotification");

$TypeInheritance = @{
    'Glide' = 'com.glide.Glide';
    'GlideAbstractBucketCollector' = 'com.glide.monitor.AbstractBucketCollector';
    'GlideAbstractDomainProvider' = 'com.glide.db.domain.AbstractDomainProvider';
    'GlideAbstractExecutionPlan' = 'com.glide.execution_plan.AbstractExecutionPlan';
    'GlideAbstractListener' = 'com.glide.listener.AbstractListener';
    'GlideAbstractRenderer' = 'com.glide.ui.portal.AbstractRenderer';
    'GlideAction' = 'com.glide.script.Action';
    'GlideActionManager' = 'com.glide.ui.action.ActionManager';
    'GlideAJAXScheduleItem' = 'com.glide.schedules.AJAXScheduleItem';
    'GlideAJAXSchedulePage' = 'com.glide.schedules.AJAXSchedulePage';
    'GlideAlertActions' = 'com.glide.alerts.AlertActions';
    'GlideappAbstractChoiceListQuestion' = 'com.glideapp.questionset.AbstractChoiceListQuestion';
    'GlideappADSILoader' = 'com.glideapp.ecc.ADSILoader';
    'GlideappAJAXMapPage' = 'com.glideapp.google_maps.AJAXMapPage';
    'GlideappCalculationHelper' = 'com.glideapp.servicecatalog.CalculationHelper';
    'GlideappCart' = 'com.glideapp.servicecatalog.Cart';
    'GlideappCartItem' = 'com.glideapp.servicecatalog.CartItem';
    'GlideappCatalogCategoryBatcher' = 'com.glideapp.servicecatalog.CatalogCategoryBatcher';
    'GlideappCatalogItem' = 'com.glideapp.servicecatalog.CatalogItem';
    'GlideappCategory' = 'com.glideapp.servicecatalog.Category';
    'GlideappCategoryPopper' = 'com.glideapp.servicecatalog.CategoryPopper';
    'GlideappCatItemPopper' = 'com.glideapp.servicecatalog.CatItemPopper';
    'GlideappChartParameters' = 'com.glideapp.chart.ChartParameters';
    'GlideappChatRoom' = 'com.glideapp.live.db.ChatRoom';
    'GlideappChatRoom$Error' = 'com.glideapp.live.db.ChatRoom.Error';
    'GlideappCheckBoxQuestion' = 'com.glideapp.questionset.CheckBoxQuestion';
    'GlideappCMDBHelper' = 'com.glideapp.ecc.CMDBHelper';
    'GlideappCMDBSoftwareHelper' = 'com.glideapp.ecc.CMDBSoftwareHelper';
    'GlideappContainerAwareQuestionSet' = 'com.glideapp.questionset.ContainerAwareQuestionSet';
    'GlideappContextDiagramProcessor' = 'com.glideapp.workflow.ui.ContextDiagramProcessor';
    'GlideappDateQuestion' = 'com.glideapp.questionset.DateQuestion';
    'GlideappDateTimeQuestion' = 'com.glideapp.questionset.DateTimeQuestion';
    'GlideappDeliveryPlan' = 'com.glideapp.servicecatalog.DeliveryPlan';
    'GlideappECCInputMessage' = 'com.glideapp.ecc.ECCInputMessage';
    'GlideappECCOutputMessage' = 'com.glideapp.ecc.ECCOutputMessage';
    'GlideappECCQueueConnector' = 'com.glideapp.ecc.ECCQueueConnector';
    'GlideappECCQueueProcessor' = 'com.glideapp.ecc.ECCQueueProcessor';
    'GlideappECCResponseMessage' = 'com.glideapp.ecc.ECCResponseMessage';
    'GlideappExpandableText' = 'com.glideapp.live_feed.HTMLTransformers.ExpandableText';
    'GlideappExpertPanelCatalogOrder' = 'com.glideapp.servicecatalog.ExpertPanelCatalogOrder';
    'GlideappFixes' = 'com.glideapp.servicecatalog.Fixes';
    'GlideappHome' = 'com.glideapp.home.Home';
    'GlideappHomePage' = 'com.glideapp.home.HomePage';
    'GlideappHomePageFactory' = 'com.glideapp.home.HomePageFactory';
    'GlideappIECC' = 'com.glideapp.ecc.IECC';
    'GlideappIOUpgrade' = 'com.glideapp.servicecatalog.IOUpgrade';
    'GlideappItemOptionsQuestionSet' = 'com.glideapp.servicecatalog.ItemOptionsQuestionSet';
    'GlideappJMSECCReceiver' = 'com.glideapp.jms.JMSECCReceiver';
    'GlideappJMSECCSender' = 'com.glideapp.jms.JMSECCSender';
    'GlideappKBIncludes' = 'com.glideapp.knowledge.KBIncludes';
    'GlideApplication' = 'com.glide.sys.Application';
    'GlideApplicationModule' = 'com.glide.processors.ApplicationModule';
    'GlideappListCollectorQuestion' = 'com.glideapp.questionset.ListCollectorQuestion';
    'GlideappLiveFeedEventHandler' = 'com.glideapp.live_feed.LiveFeedEventHandler';
    'GlideappLiveFeedJournalWriter' = 'com.glideapp.live_feed.LiveFeedJournalWriter';
    'GlideappLiveFeedUIAction' = 'com.glideapp.live_feed.LiveFeedUIAction';
    'GlideappLiveProfile' = 'com.glideapp.live_common.LiveProfile';
    'GlideappLiveUtils' = 'com.glideapp.live.LiveUtils';
    'GlideappLookupSelectQuestion' = 'com.glideapp.questionset.LookupSelectQuestion';
    'GlideappMessageTag' = 'com.glideapp.live_feed.MessageTag';
    'GlideappOrderGuide' = 'com.glideapp.servicecatalog.OrderGuide';
    'GlideappProcessQueue' = 'com.glideapp.ecc.ccmdb.ProcessQueue';
    'GlideappQuestion' = 'com.glideapp.questionset.Question';
    'GlideappQuestionChoice' = 'com.glideapp.questionset.QuestionChoice';
    'GlideappQueueHelper' = 'com.glideapp.ecc.QueueHelper';
    'GlideappQueueReader' = 'com.glideapp.ecc.QueueReader';
    'GlideappReferenceQuestion' = 'com.glideapp.questionset.ReferenceQuestion';
    'GlideappRequestItemWorkflow' = 'com.glideapp.servicecatalog.RequestItemWorkflow';
    'GlideappRequestNew' = 'com.glideapp.servicecatalog.RequestNew';
    'GlideappScriptHelper' = 'com.glideapp.servicecatalog.ScriptHelper';
    'GlideappSecurityMask' = 'com.glideapp.servicecatalog.SecurityMask';
    'GlideappSequencedQuestionSet' = 'com.glideapp.questionset.SequencedQuestionSet';
    'GlideappTaskApprovalHelper' = 'com.glideapp.servicecatalog.TaskApprovalHelper';
    'GlideappTimeAgo' = 'com.glideapp.live_feed.TimeAgo';
    'GlideappUpdateVersion' = 'com.glideapp.version.UpdateVersion';
    'GlideappUpgradeQuestions' = 'com.glideapp.survey.UpgradeQuestions';
    'GlideappValveProcessor' = 'com.glideapp.servicecatalog.valve.ValveProcessor';
    'GlideappVariable' = 'com.glideapp.servicecatalog.variables.Variable';
    'GlideappVariablePoolQuestionSet' = 'com.glideapp.servicecatalog.variables.VariablePoolQuestionSet';
    'GlideappWizardIntercept' = 'com.glideapp.wizard.WizardIntercept';
    'GlideappWMILoader' = 'com.glideapp.ecc.WMILoader';
    'GlideappWorkflowHelper' = 'com.glideapp.workflow.WorkflowHelper';
    'GlideappYesNoQuestion' = 'com.glideapp.questionset.YesNoQuestion';
    'GlideAQueryExplanation' = 'com.glide.db.explain.AQueryExplanation';
    'GlideArchiver' = 'com.glide.db.auxiliary.Archiver';
    'GlideArchiveRecord' = 'com.glide.db.auxiliary.ArchiveRecord';
    'GlideArchiveRestore' = 'com.glide.db.auxiliary.ArchiveRestore';
    'GlideArchiveStatus' = 'com.glide.db.auxiliary.ArchiveStatus';
    'GlideArchiveTable' = 'com.glide.db.auxiliary.ArchiveTable';
    'GlideARecurrence' = 'com.glide.schedule.recurrence.ARecurrence';
    'GlideAttachmentIndexDocument' = 'com.glide.lucene.attachments.AttachmentIndexDocument';
    'GlideAttachmentIndexTypes' = 'com.glide.lucene.attachments.AttachmentIndexTypes';
    'GlideAttributes' = 'com.glide.util.GlideAttributes';
    'GlideAuditDelete' = 'com.glide.audit.AuditDelete';
    'GlideAuditor' = 'com.glide.script.Auditor';
    'GlideAutomationEncrypter' = 'com.glide.util.AutomationEncrypter';
    'GlideBaseTag' = 'com.glide.ui.jelly.tags.BaseTag';
    'GlideBootstrap' = 'com.glide.db.impex.Bootstrap';
    'GlideBoundedIntProperty' = 'com.glide.util.BoundedIntProperty';
    'GlideCacheManager' = 'com.glide.sys.cache.CacheManager';
    'GlideCalendar' = 'com.glide.schedule.GlideCalendar';
    'GlideCalendarWeekEntry' = 'com.glide.calendar.GlideCalendarWeekEntry';
    'GlideCanceledUITransaction' = 'com.glide.ui.CanceledUITransaction';
    'GlideCascadeFromDelete' = 'com.glide.db.CascadeFromDelete';
    'GlideCatalogCloneWorker' = 'com.glide.catalog.cloner.CatalogCloneWorker';
    'GlideChannel' = 'com.glide.channel.Channel';
    'GlideChannelManager' = 'com.glide.channel.ChannelManager';
    'GlideChannelMessage' = 'com.glide.channel.ChannelMessage';
    'GlideChartFieldColors' = 'com.glide.ui.chart.dataset.ChartFieldColors';
    'GlideChartGeneratorFactory' = 'com.glide.ui.chart.ChartGeneratorFactory';
    'GlideChartUtil' = 'com.glide.ui.chart.dataset.ChartUtil';
    'GlideChartValue' = 'com.glide.ui.chart.dataset.ChartValue';
    'GlideChecksum' = 'com.glide.util.Checksum';
    'GlideChoice' = 'com.glide.choice.Choice';
    'GlideChoiceList' = 'com.glide.choice.ChoiceList';
    'GlideChoiceListGenerator' = 'com.glide.choice.ChoiceListGenerator';
    'GlideChoiceListSet' = 'com.glide.choice.ChoiceListSet';
    'GlideChoiceListUpdateSaver' = 'com.glide.update.saver.ChoiceListUpdateSaver';
    'GlideClientBrowserTimes' = 'com.glide.client_transaction.ClientBrowserTimes';
    'GlideClientNetworkTimes' = 'com.glide.client_transaction.ClientNetworkTimes';
    'GlideClusterMessage' = 'com.glide.cluster.ClusterMessage';
    'GlideClusterSynchronizer' = 'com.glide.cluster.ClusterSynchronizer';
    'GlideCMSLinkHelper' = 'com.glide.cms.CMSLinkHelper';
    'GlideCMSPageLink' = 'com.glide.cms.CMSPageLink';
    'GlideCollectionEnumerator' = 'com.glide.util.CollectionEnumerator';
    'GlideCollectionQueryCalculator' = 'com.glide.ui.CollectionQueryCalculator';
    'GlideCollisionDetector' = 'com.glide.update.collisions.CollisionDetector';
    'GlideColumnAttributes' = 'com.glide.db.impex.ColumnAttributes';
    'GlideCompanyResolver' = 'com.glide.misc.CompanyResolver';
    'GlideCompiler' = 'com.glide.script.Compiler';
    'GlideCompositeElement' = 'com.glide.db.CompositeElement';
    'GlideConfiguration' = 'com.glide.notification.Configuration';
    'GlideContentConfig' = 'com.glide.cms.ContentConfig';
    'GlideContentPage' = 'com.glide.cms.ContentPage';
    'GlideContentSite' = 'com.glide.cms.ContentSite';
    'GlideContentType' = 'com.glide.cms.ContentType';
    'GlideContextMenu' = 'com.glide.db_context_menu.ContextMenu';
    'GlideContextMenuItem' = 'com.glide.db_context_menu.ContextMenuItem';
    'GlideContextualSecurityManager' = 'com.glide.sys.security.ContextualSecurityManager';
    'GlideController' = 'com.glide.script.GlideController';
    'GlideConverter' = 'com.glide.currency.Converter';
    'GlideCookieMan' = 'com.glide.ui.CookieMan';
    'GlideCounter' = 'com.glide.util.Counter';
    'GlideCredentials' = 'com.glide.communications.crypto.Credentials';
    'GlideCryptoService' = 'com.glide.security.CryptoService';
    'GlideCSVExporter' = 'com.glide.generators.CSVExporter';
    'GlideCustomerScriptFixer' = 'com.glide.script.api.CustomerScriptFixer';
    'GlideDatabaseVerifier' = 'com.glide.db.DatabaseVerifier';
    'GlideDatabaseViewLink' = 'com.glide.database_views.DatabaseViewLink';
    'GlideDataSource' = 'com.glide.db.impex.datasource.DataSource';
    'GlideDate' = 'com.glide.glideobject.GlideDate';
    'GlideDateTime' = 'com.glide.glideobject.GlideDateTime';
    'GlideDateUtil' = 'com.glide.util.DateUtil';
    'GlideDBAction' = 'com.glide.db.DBAction';
    'GlideDBAggregateQuery' = 'com.glide.db.DBAggregateQuery';
    'GlideDBAggregateUtil' = 'com.glide.db.DBAggregateUtil';
    'GlideDBCategoryDebug' = 'com.glide.secondary_db_pools.DBCategoryDebug';
    'GlideDBChangeManager' = 'com.glide.db.change.DBChangeManager';
    'GlideDBCompositeAction' = 'com.glide.db.DBCompositeAction';
    'GlideDBConfiguration' = 'com.glide.db.DBConfiguration';
    'GlideDBConfigurationManager' = 'com.glide.db.DBConfigurationManager';
    'GlideDBConfigurationManagerEventHandler' = 'com.glide.db.DBConfigurationManagerEventHandler';
    'GlideDBConfigurationParms' = 'com.glide.db.DBConfigurationParms';
    'GlideDBConfigurationV2Migrator' = 'com.glide.db.DBConfigurationV2Migrator';
    'GlideDBConnection' = 'com.glide.db.pool.DBConnection';
    'GlideDBConnectionPool' = 'com.glide.db.pool.DBConnectionPool';
    'GlideDBConnectionPooler' = 'com.glide.db.pool.DBConnectionPooler';
    'GlideDBDelete' = 'com.glide.db.DBDelete';
    'GlideDBI' = 'com.glide.db.DBI';
    'GlideDBImageProvider' = 'com.glide.db_image.DBImageProvider';
    'GlideDBIMySQL' = 'com.glide.db.rdbms.mysql.DBIMySQL';
    'GlideDBIndex' = 'com.glide.db.DBIndex';
    'GlideDBKeyStoreFactory' = 'com.glide.certificates.DBKeyStoreFactory';
    'GlideDBMacro' = 'com.glide.ui.jelly.tags.form.DBMacro';
    'GlideDBMicroStats' = 'com.glide.db.DBMicroStats';
    'GlideDBMultiTargetAction' = 'com.glide.db.DBMultiTargetAction';
    'GlideDBObjectManager' = 'com.glide.db.DBObjectManager';
    'GlideDBObjectToken' = 'com.glide.db.DBObjectToken';
    'GlideDBPoolTest' = 'com.glide.secondary_db_pools.DBPoolTest';
    'GlideDBPropertiesConfig' = 'com.glide.db.DBPropertiesConfig';
    'GlideDBQuery' = 'com.glide.db.DBQuery';
    'GlideDBTypes' = 'com.glide.db.DBTypes';
    'GlideDBUpdate' = 'com.glide.db.DBUpdate';
    'GlideDBUtil' = 'com.glide.db.DBUtil';
    'GlideDBView' = 'com.glide.db.DBView';
    'GlideDebugEvaluator' = 'com.glide.jsdebug.DebugEvaluator';
    'GlideDefaultUpdateSaver' = 'com.glide.update.saver.DefaultUpdateSaver';
    'GlideDiagram' = 'com.glide.diagrammer.Diagram';
    'GlideDiagramAction' = 'com.glide.diagrammer.DiagramAction';
    'GlideDiagramEdge' = 'com.glide.diagrammer.DiagramEdge';
    'GlideDiagramElement' = 'com.glide.diagrammer.DiagramElement';
    'GlideDiagramNode' = 'com.glide.diagrammer.DiagramNode';
    'GlideDistUpgradeRunner' = 'com.glide.dist.upgrade.runner.DistUpgradeRunner';
    'GlideDocument' = 'com.glide.util.GlideDocument';
    'GlideDomain' = 'com.glide.db.domain.Domain';
    'GlideDomainDisplay' = 'com.glide.db.domain.DomainDisplay';
    'GlideDomainHierarchy' = 'com.glide.db.domain.DomainHierarchy';
    'GlideDomainNumberProvider' = 'com.glide.db.domain.DomainNumberProvider';
    'GlideDomainPathDisplay' = 'com.glide.db.domain.DomainPathDisplay';
    'GlideDomainPathProvider' = 'com.glide.db.domain.DomainPathProvider';
    'GlideDomainSpoolProvider' = 'com.glide.db.domain.DomainSpoolProvider';
    'GlideDomainSupport' = 'com.glide.db.domain.DomainSupport';
    'GlideDomainTree' = 'com.glide.db.domain.DomainTree';
    'GlideDomainUtil' = 'com.glide.db.domain.DomainUtil';
    'GlideDomainValidator' = 'com.glide.db.domain.DomainValidator';
    'GlideDuration' = 'com.glide.glideobject.GlideDuration';
    'GlideECBDownloader' = 'com.glide.currency.ECBDownloader';
    'GlideECCQueueTransformer' = 'com.glide.db.impex.ECCQueueTransformer';
    'GlideElement' = 'com.glide.script.GlideElement';
    'GlideElementDescriptor' = 'com.glide.db.ElementDescriptor';
    'GlideElementIterator' = 'com.glide.util.ElementIterator';
    'GlideElementUserImage' = 'com.glide.script.glide_elements.GlideElementUserImage';
    'GlideElementXMLSerializer' = 'com.glide.script.GlideElementXMLSerializer';
    'GlideEmail' = 'com.glide.notification.Email';
    'GlideEmailAction' = 'com.glide.notification.outbound.EmailAction';
    'GlideEmailFormatter' = 'com.glide.notification.outbound.EmailFormatter';
    'GlideEmailInbound' = 'com.glide.notification.inbound.EmailInbound';
    'GlideEmailOutbound' = 'com.glide.notification.outbound.EmailOutbound';
    'GlideEmailReader' = 'com.glide.notification.inbound.EmailReader';
    'GlideEmailSender' = 'com.glide.notification.outbound.EmailSender';
    'GlideEmailWatermark' = 'com.glide.notification.EmailWatermark';
    'GlideEmitter' = 'com.glide.ui.jelly.Emitter';
    'GlideEncrypter' = 'com.glide.util.Encrypter';
    'GlideEncryptionContext' = 'com.glide.sys.EncryptionContext';
    'GlideEncryptionContextCipher' = 'com.glide.sys.security.EncryptionContextCipher';
    'GlideEncryptionWrapperDB' = 'com.glide.sys.security.EncryptionWrapperDB';
    'GlideEncryptionWrapperDBAdmin' = 'com.glide.sys.security.EncryptionWrapperDBAdmin';
    'GlideEncryptionWrapperNAE' = 'com.glide.sys.security.EncryptionWrapperNAE';
    'GlideEncryptionWrapperNAEAdmin' = 'com.glide.sys.security.EncryptionWrapperNAEAdmin';
    'GlideEscalationManager' = 'com.glide.escalation.EscalationManager';
    'GlideEscalationTimerJobMarkII' = 'com.glide.job.EscalationTimerJobMarkII';
    'GlideEvaluator' = 'com.glide.script.Evaluator';
    'GlideEvent' = 'com.glide.policy.Event';
    'GlideEventManager' = 'com.glide.policy.EventManager';
    'GlideExcelExporter' = 'com.glide.generators.ExcelExporter';
    'GlideExcelLoader2' = 'com.glide.db.impex.ExcelLoader2';
    'GlideExecutionPlan' = 'com.glide.execution_plan.ExecutionPlan';
    'GlideExpressionWrapper' = 'com.glide.ui.jelly.GlideExpressionWrapper';
    'GlideExtensionPoint' = 'com.glide.sys.ExtensionPoint';
    'GlideFieldList' = 'com.glide.processors.FieldList';
    'GlideFile' = 'com.glide.script.proxy.File';
    'GlideFileUtil' = 'com.glide.util.FileUtil';
    'GlideFilter' = 'com.glide.script.Filter';
    'GlideFilterList' = 'com.glide.script.FilterList';
    'GlideFixCatalogPlans' = 'com.glide.fixes.FixCatalogPlans';
    'GlideFixDeliveryPlans' = 'com.glide.fixes.FixDeliveryPlans';
    'GlideFixGroups' = 'com.glide.fixes.FixGroups';
    'GlideFixItemOptionsAgain' = 'com.glide.fixes.FixItemOptionsAgain';
    'GlideFixRules' = 'com.glide.fixes.FixRules';
    'GlideFixSpellCheck' = 'com.glide.fixes.FixSpellCheck';
    'GlideFixStuff' = 'com.glide.fixes.FixStuff';
    'GlideFixUsers' = 'com.glide.fixes.FixUsers';
    'GlideForm' = 'com.glide.ui.GlideForm';
    'GlideFormCommon' = 'com.glide.ui.GlideFormCommon';
    'GlideFormulator' = 'com.glide.ui.GlideFormulator';
    'GlideGauge' = 'com.glide.report.Gauge';
    'GlideGovernor' = 'com.glide.sys.util.Governor';
    'GlideGregorianCalendar' = 'com.glide.util.GlideGregorianCalendar';
    'GlideGroup' = 'com.glide.sys.Group';
    'GlideGroupByListTag' = 'com.glide.ui.jelly.tags.form.GroupByListTag';
    'GlideGuid' = 'com.glide.util.Guid';
    'GlideHierarchicalReference' = 'com.glide.glideobject.HierarchicalReference';
    'GlideHistorySet' = 'com.glide.audit.HistorySet';
    'GlideHistoryTag2' = 'com.glide.ui.jelly.tags.mergedata.HistoryTag2';
    'GlideHostUtil' = 'com.glide.util.HostUtil';
    'GlideHTTPClient' = 'com.glide.communications.HTTPClient';
    'GlideHTTPRequest' = 'com.glide.communications.HTTPRequest';
    'GlideHTTPResponse' = 'com.glide.communications.HTTPResponse';
    'GlideI18NStyle' = 'com.glide.ui.I18NStyle';
    'GlideICALUtil' = 'com.glide.policy.ICALUtil';
    'GlideIConstants' = 'com.glide.util.IConstants';
    'GlideIGlideRecord' = 'com.glide.util.IGlideRecord';
    'GlideImageLoader' = 'com.glide.script.ImageLoader';
    'GlideImpersonate' = 'com.glide.sys.Impersonate';
    'GlideImportLog' = 'com.glide.db.impex.ImportLog';
    'GlideImportMap' = 'com.glide.db.impex.ImportMap';
    'GlideImportMapField' = 'com.glide.db.impex.ImportMapField';
    'GlideImportSet' = 'com.glide.system_import_set.ImportSet';
    'GlideImportSetLoader' = 'com.glide.system_import_set.ImportSetLoader';
    'GlideImportSetRun' = 'com.glide.system_import_set.ImportSetRun';
    'GlideImportSetTransformer' = 'com.glide.system_import_set.ImportSetTransformer';
    'GlideImportSetTransformerWorker' = 'com.glide.system_import_set.ImportSetTransformerWorker';
    'GlideIndexDescriptor' = 'com.glide.db.IndexDescriptor';
    'GlideIndexUtils' = 'com.glide.db.IndexUtils';
    'GlideIntegerTime' = 'com.glide.glideobject.IntegerTime';
    'GlideInternalElementTypeChoiceList' = 'com.glide.script.InternalElementTypeChoiceList';
    'GlideInternalMonitor' = 'com.glide.ui.monitor.InternalMonitor';
    'GlideIOStats' = 'com.glide.db.IOStats';
    'GlideIPAddressUtil' = 'com.glide.util.IPAddressUtil';
    'GlideIQueryCondition' = 'com.glide.util.IQueryCondition';
    'GlideIRow' = 'com.glide.db.meta.IRow';
    'GlideIRQuerySummary' = 'com.glide.db.ir.IRQuerySummary';
    'GlideIRQuerySummarySimple' = 'com.glide.db.ir.IRQuerySummarySimple';
    'GlideISecurityManager' = 'com.glide.sys.security.ISecurityManager';
    'GlideITableIterator' = 'com.glide.db.access.ITableIterator';
    'GlideJDBCLoader' = 'com.glide.db.impex.JDBCLoader';
    'GlideJDBCProbeTestWorker' = 'com.glide.db.impex.JDBCProbeTestWorker';
    'GlideJellyContext' = 'com.glide.ui.jelly.GlideJellyContext';
    'GlideJellyRunner' = 'com.glide.ui.jelly.JellyRunner';
    'GlideJID' = 'com.glide.xmpp.JID';
    'GlideJSUtil' = 'com.glide.script.JSUtil';
    'GlideLabelEventHandler' = 'com.glide.labels.LabelEventHandler';
    'GlideLabelGenerator' = 'com.glide.db.LabelGenerator';
    'GlideLabelUtil' = 'com.glide.labels.LabelUtil';
    'GlideLDAP' = 'com.glide.sys.ldap.LDAP';
    'GlideLDAPConfig' = 'com.glide.sys.ldap.LDAPConfig';
    'GlideLDAPConfigurations' = 'com.glide.sys.ldap.LDAPConfigurations';
    'GlideLDAPErrorAnalyzer' = 'com.glide.sys.ldap.LDAPErrorAnalyzer';
    'GlideLDAPGroups' = 'com.glide.sys.ldap.LDAPGroups';
    'GlideLDAPRefresh' = 'com.glide.sys.ldap.LDAPRefresh';
    'GlideLDAPResult' = 'com.glide.sys.ldap.LDAPResult';
    'GlideLDAPTarget' = 'com.glide.sys.ldap.LDAPTarget';
    'GlideLDAPTransformQueue' = 'com.glide.sys.ldap.LDAPTransformQueue';
    'GlideLDAPUsers' = 'com.glide.sys.ldap.LDAPUsers';
    'GlideLDAPUserUpdate' = 'com.glide.sys.ldap.LDAPUserUpdate';
    'GlideList' = 'com.glide.glideobject.GlideList';
    'GlideListGroupProperties' = 'com.glide.list_v2.ListGroupProperties';
    'GlideListLabel' = 'com.glide.ui.ListLabel';
    'GlideListM2MBacking' = 'com.glide.glideobject.GlideListM2MBacking';
    'GlideListProperties' = 'com.glide.list_v2.ListProperties';
    'GlideListSearchQuery' = 'com.glide.ui.ListSearchQuery';
    'GlideLoader' = 'com.glide.db.impex.Loader';
    'GlideLoadTestDirector' = 'com.glide.load_test.LoadTestDirector';
    'GlideLocale' = 'com.glide.sys.GlideLocale';
    'GlideLocaleLoader' = 'com.glide.currency.LocaleLoader';
    'GlideLock' = 'com.glide.script.Lock';
    'GlideLog' = 'com.glide.util.Log';
    'GlideLogCleanup' = 'com.glide.util.LogCleanup';
    'GlideLogFileReader' = 'com.glide.log_file.LogFileReader';
    'GlideLRUCache' = 'com.glide.sys.cache.LRUCache';
    'GlideLuceneTextIndexEvent' = 'com.glide.lucene.TextIndexEvent';
    'GlideMarkupWriter' = 'com.glide.util.MarkupWriter';
    'GlideMemoryActive' = 'com.glide.ui.monitor.MemoryActive';
    'GlideMemoryCache' = 'com.glide.ui.monitor.MemoryCache';
    'GlideMemoryRecord' = 'com.glide.script.GlideMemoryRecord';
    'GlideMemorySwap' = 'com.glide.ui.monitor.MemorySwap';
    'GlideMemoryTable' = 'com.glide.util.MemoryTable';
    'GlideMemoryTotal' = 'com.glide.ui.monitor.MemoryTotal';
    'GlideMetaData' = 'com.glide.script.MetaData';
    'GlideMIDServerInfoAccessor' = 'com.glide.script.MIDServerInfoAccessor';
    'GlideMobileExtensions' = 'com.glide.ui.MobileExtensions';
    'GlideModule' = 'com.glide.sys.Module';
    'GlideMultipleAction' = 'com.glide.db.MultipleAction';
    'GlideMultipleDelete' = 'com.glide.db.MultipleDelete';
    'GlideMultipleInsert' = 'com.glide.db.MultipleInsert';
    'GlideMultipleUpdate' = 'com.glide.db.MultipleUpdate';
    'GlideMutex' = 'com.glide.sys.lock.Mutex';
    'GlideMySQLWatch' = 'com.glide.sys.stats.MySQLWatch';
    'GlideNumber' = 'com.glide.script.glide_elements.GlideNumber';
    'GlideNumberManager' = 'com.glide.db.NumberManager';
    'GlideObjectManager' = 'com.glide.glideobject.GlideObjectManager';
    'GlideObjectUtil' = 'com.glide.util.ObjectUtil';
    'GlideOrderingDefinitionCreator' = 'com.glide.sorting.OrderingDefinitionCreator';
    'GlideOrderingManager' = 'com.glide.sorting.OrderingManager';
    'GlideOutputWriter' = 'com.glide.ui.io.GlideOutputWriter';
    'GlideOutputWriterFactory' = 'com.glide.ui.io.GlideOutputWriterFactory';
    'GlideOverLoadedChoices' = 'com.glide.script.OverLoadedChoices';
    'GlidePivotTableSummaryTableWriter' = 'com.glide.ui.chart.dataset.PivotTableSummaryTableWriter';
    'GlidePlugin' = 'com.glide.sys.Plugin';
    'GlidePluginManager' = 'com.glide.sys.PluginManager';
    'GlidePluginManagerWorker' = 'com.glide.sys.PluginManagerWorker';
    'GlidePluginUtils' = 'com.glide.sys.PluginUtils';
    'GlidePOP3Reader' = 'com.glide.notification.inbound.POP3Reader';
    'GlidePOP3ReaderJob' = 'com.glide.job.POP3ReaderJob';
    'GlidePopup' = 'com.glide.ui.Popup';
    'GlidePriceGenerator' = 'com.glide.currency.PriceGenerator';
    'GlidePriceLoader' = 'com.glide.currency.PriceLoader';
    'GlideProcessor' = 'com.glide.processors.Processor';
    'GlideProgressMonitor' = 'com.glide.worker.ProgressMonitor';
    'GlideProgressWorker' = 'com.glide.worker.ProgressWorker';
    'GlideProperties' = 'com.glide.util.GlideProperties';
    'GlidePropertiesDB' = 'com.glide.util.GlidePropertiesDB';
    'GlideProperty' = 'com.glide.util.GlideProperty';
    'GlidePublicPage' = 'com.glide.ui.PublicPage';
    'GlideQueryBreadcrumbs' = 'com.glide.misc.QueryBreadcrumbs';
    'GlideQueryCondition' = 'com.glide.db.conditions.QueryCondition';
    'GlideQueryFormatter' = 'com.glide.ui.jelly.tags.form.QueryFormatter';
    'GlideQueryString' = 'com.glide.db.QueryString';
    'GlideQueryTerm' = 'com.glide.db.QueryTerm';
    'GlideRecord' = 'com.glide.script.GlideRecord';
    'GlideRecordCache' = 'com.glide.sys.RecordCache';
    'GlideRecordEnsurer' = 'com.glide.misc.RecordEnsurer';
    'GlideRecordFactory' = 'com.glide.script.GlideRecordFactory';
    'GlideRecordKeySetLoader' = 'com.glide.script.GlideRecordKeySetLoader';
    'GlideRecordLock' = 'com.glide.script.RecordLock';
    'GlideRecordPopupGenerator' = 'com.glide.calendar.RecordPopupGenerator';
    'GlideRecordRollback' = 'com.glide.script.GlideRecordRollback';
    'GlideRecordSet' = 'com.glide.script.GlideRecordSet';
    'GlideRecordSimpleSerializer' = 'com.glide.script.GlideRecordSimpleSerializer';
    'GlideRecordXMLSerializer' = 'com.glide.script.GlideRecordXMLSerializer';
    'GlideReferenceField' = 'com.glide.script.ReferenceField';
    'GlideRegexUtil' = 'com.glide.util.RegexUtil';
    'GlideRegisterEscalationEvents' = 'com.glide.fixes.RegisterEscalationEvents';
    'GlideRelatedListReconciler' = 'com.glide.misc.RelatedListReconciler';
    'GlideRelationship' = 'com.glide.sys.Relationship';
    'GlideRelationships' = 'com.glide.db.Relationships';
    'GlideRelationshipUtil' = 'com.glide.sys.RelationshipUtil';
    'GlideRemoteGlideRecord' = 'com.glide.communications.RemoteGlideRecord';
    'GlideRenderProperties' = 'com.glide.ui.RenderProperties';
    'GlideReplaceUpdateFiles' = 'com.glide.util.ReplaceUpdateFiles';
    'GlideReplicationEngine' = 'com.glide.replicator.ReplicationEngine';
    'GlideReport' = 'com.glide.report.Report';
    'GlideReportChoiceList' = 'com.glide.script.ReportChoiceList';
    'GlideReportViewManagement' = 'com.glide.report.ReportViewManagement';
    'GlideRequestMap' = 'com.glide.util.RequestMap';
    'GlideRevertToOutOfBox' = 'com.glide.update.RevertToOutOfBox';
    'GlideRhinoEnvironment' = 'com.glide.script.GlideRhinoEnvironment';
    'GlideRhinoHelper' = 'com.glide.script.GlideRhinoHelper';
    'GlideRhinoScopeHandler' = 'com.glide.script.GlideRhinoScopeHandler';
    'GlideRRDBAlertProcessor' = 'com.glide.rrdb.alerts.RRDBAlertProcessor';
    'GlideRRDBDefinition' = 'com.glide.rrdb.RRDBDefinition';
    'GlideRunScriptJob' = 'com.glide.job.RunScriptJob';
    'GlideSchedule' = 'com.glide.schedules.Schedule';
    'GlideScheduleDateTime' = 'com.glide.glideobject.ScheduleDateTime';
    'GlideScheduleDateTimeSpan' = 'com.glide.schedules.ScheduleDateTimeSpan';
    'GlideScheduleItem' = 'com.glide.schedules.ScheduleItem';
    'GlideScheduler' = 'com.glide.schedule.GlideScheduler';
    'GlideScheduleTimeMap' = 'com.glide.schedules.ScheduleTimeMap';
    'GlideScheduleTimeSpan' = 'com.glide.schedules.ScheduleTimeSpan';
    'GlideScriptChoiceList' = 'com.glide.script.ChoiceList';
    'GlideScriptedProgressWorker' = 'com.glide.worker.ScriptedProgressWorker';
    'GlideScriptEvaluator' = 'com.glide.script.ScriptEvaluator';
    'GlideScriptGlobals' = 'com.glide.script.GlideScriptGlobals';
    'GlideScriptListener' = 'com.glide.listener.ScriptListener';
    'GlideScriptProcessor' = 'com.glide.processors.ScriptProcessor';
    'GlideScriptRecordUtil' = 'com.glide.script.GlideRecordUtil';
    'GlideScriptSystemUtilDB' = 'com.glide.script.GlideSystemUtilDB';
    'GlideScriptViewManager' = 'com.glide.ui.ViewManager';
    'GlideScriptWriter' = 'com.glide.script.ScriptWriter';
    'GlideSearchQueryFormatter' = 'com.glide.text_search.SearchQueryFormatter';
    'GlideSecondaryDatabaseBehindnessChecker' = 'com.glide.secondary_db_pools.SecondaryDatabaseBehindnessChecker';
    'GlideSecondaryDatabaseConfiguration' = 'com.glide.secondary_db_pools.SecondaryDatabaseConfiguration';
    'GlideSecurityManager' = 'com.glide.sys.security.GlideSecurityManager';
    'GlideSecurityQueryCalculator' = 'com.glide.sys.security.SecurityQueryCalculator';
    'GlideSecurityUtils' = 'com.glide.util.SecurityUtils';
    'GlideSelfCleaningMutex' = 'com.glide.sys.lock.SelfCleaningMutex';
    'GlideServiceAPIWrapper' = 'com.glide.service_api.ServiceAPIWrapper';
    'GlideServlet' = 'com.glide.ui.GlideServlet';
    'GlideServletRequest' = 'com.glide.ui.GlideServletRequest';
    'GlideServletResponse' = 'com.glide.ui.GlideServletResponse';
    'GlideServletStatus' = 'com.glide.ui.ServletStatus';
    'GlideSession' = 'com.glide.sys.GlideSession';
    'GlideSessionDebug' = 'com.glide.sys.SessionDebug';
    'GlideSessions' = 'com.glide.ui.Sessions';
    'GlideSessionSandbox' = 'com.glide.script.GlideSessionSandbox';
    'GlideSimmerDown' = 'com.glide.db.change.command.SimmerDown';
    'GlideSimmerUp' = 'com.glide.db.change.command.SimmerUp';
    'GlideSimpleDateFormatEx' = 'com.glide.util.SimpleDateFormatEx';
    'GlideSimpleHTTPClient' = 'com.glide.communications.SimpleHTTPClient';
    'GlideSimpleScriptListener' = 'com.glide.listener.SimpleScriptListener';
    'GlideSMTPConnection' = 'com.glide.notification.outbound.SMTPConnection';
    'GlideSMTPSender' = 'com.glide.notification.outbound.SMTPSender';
    'GlideSMTPSenderJob' = 'com.glide.job.SMTPSenderJob';
    'GlideSOAPDocument' = 'com.glide.communications.soap.SOAPDocument';
    'GlideSOAPRequest' = 'com.glide.communications.soap.SOAPRequest';
    'GlideSOAPResponse' = 'com.glide.communications.soap.SOAPResponse';
    'GlideSOAPSecurity' = 'com.glide.processors.soap.SOAPSecurity';
    'GlideSOAPSigner' = 'com.glide.communications.soap.SOAPSigner';
    'GlideSocket' = 'com.glide.script.proxy.Socket';
    'GlidesoftGlideAttributesImpl' = 'com.glidesoft.util.xml.GlideAttributesImpl';
    'GlidesoftXMLMemoryTable' = 'com.glidesoft.util.xml.XMLMemoryTable';
    'GlideSQLDebug' = 'com.glide.ui.diagnostics.SQLDebug';
    'GlideSSHClient' = 'com.glide.communications.SSHClient';
    'GlideStack' = 'com.glide.sys.GlideStack';
    'GlideStatistician' = 'com.glide.sys.stats.Statistician';
    'GlideStatsInfo' = 'com.glide.monitor.StatsInfo';
    'GlideStatus' = 'com.glide.util.GlideStatus';
    'GlideStopWatch' = 'com.glide.util.StopWatch';
    'GlideStorageUtils' = 'com.glide.db.meta.StorageUtils';
    'GlideStringCache' = 'com.glide.sys.cache.StringCache';
    'GlideStringInputStream' = 'com.glide.util.StringInputStream';
    'GlideStringList' = 'com.glide.collections.StringList';
    'GlideStringUtil' = 'com.glide.util.StringUtil';
    'GlideSubQuery' = 'com.glide.db.conditions.SubQuery';
    'GlideSubstituteURL' = 'com.glide.notification.substitution.SubstituteURL';
    'GlideSummaryTableGroupReader' = 'com.glide.ui.chart.dataset.SummaryTableGroupReader';
    'GlideSummaryTableOrderedReader' = 'com.glide.ui.chart.dataset.SummaryTableOrderedReader';
    'GlideSummaryTableReader' = 'com.glide.ui.chart.dataset.SummaryTableReader';
    'GlideSummaryTableWriter' = 'com.glide.ui.chart.dataset.SummaryTableWriter';
    'GlideSynchronizedLRUCache' = 'com.glide.sys.cache.SynchronizedLRUCache';
    'GlideSysAttachment' = 'com.glide.ui.SysAttachment';
    'GlideSysAttachmentInputStream' = 'com.glide.ui.SysAttachmentInputStream';
    'GlideSysBRThreadMonitor' = 'com.glide.monitor.threads.SysBRThreadMonitor';
    'GlideSysChoice' = 'com.glide.script.SysChoice';
    'GlideSysConcurrencyMonitor' = 'com.glide.monitor.threads.SysConcurrencyMonitor';
    'GlideSysCPUThreadMonitor' = 'com.glide.monitor.threads.SysCPUThreadMonitor';
    'GlideSysDateUtil' = 'com.glide.sys.util.SysDateUtil';
    'GlideSysDBThreadMonitor' = 'com.glide.monitor.threads.SysDBThreadMonitor';
    'GlideSysField' = 'com.glide.db.SysField';
    'GlideSysFileUtil' = 'com.glide.sys.util.SysFileUtil';
    'GlideSysForm' = 'com.glide.ui.SysForm';
    'GlideSysForms' = 'com.glide.ui.SysForms';
    'GlideSysList' = 'com.glide.ui.SysList';
    'GlideSysListControl' = 'com.glide.ui.SysListControl';
    'GlideSysLog' = 'com.glide.sys.SysLog';
    'GlideSYSMany2Many' = 'com.glide.db.SYSMany2Many';
    'GlideSysMessage' = 'com.glide.ui.SysMessage';
    'GlideSysNetThreadMonitor' = 'com.glide.monitor.threads.SysNetThreadMonitor';
    'GlideSysRelatedList' = 'com.glide.ui.SysRelatedList';
    'GlideSysSection' = 'com.glide.ui.SysSection';
    'GlideSysSemaphore' = 'com.glide.sys.util.SysSemaphore';
    'GlideSystem' = 'com.glide.script.GlideSystem';
    'GlideSystemDateUtil' = 'com.glide.script.system.GlideSystemDateUtil';
    'GlideSystemUtil' = 'com.glide.util.SystemUtil';
    'GlideSystemUtilDB' = 'com.glide.script.system.GlideSystemUtilDB';
    'GlideSystemUtilScript' = 'com.glide.script.system.GlideSystemUtilScript';
    'GlideSysThreadMonitor' = 'com.glide.monitor.threads.SysThreadMonitor';
    'GlideSysUserList' = 'com.glide.ui.SysUserList';
    'GlideTable' = 'com.glide.db.meta.Table';
    'GlideTableChoiceList' = 'com.glide.script.TableChoiceList';
    'GlideTableCleaner' = 'com.glide.misc.TableCleaner';
    'GlideTableCleanerJob' = 'com.glide.job.TableCleanerJob';
    'GlideTableCreator' = 'com.glide.db.impex.TableCreator';
    'GlideTableDescriptor' = 'com.glide.db.TableDescriptor';
    'GlideTableGroupMover' = 'com.glide.db.auxiliary.TableGroupMover';
    'GlideTableManager' = 'com.glide.db.TableManager';
    'GlideTableMover' = 'com.glide.db.auxiliary.TableMover';
    'GlideTableParentChange' = 'com.glide.db.table.TableParentChange';
    'GlideTableParentColumnChange' = 'com.glide.db.table.TableParentColumnChange';
    'GlideTaskToken' = 'com.glide.execution_plan.TaskToken';
    'GlideTemplate' = 'com.glide.script.Template';
    'GlideTextIndexEvent' = 'com.glide.ts.event.TextIndexEvent';
    'GlideThreadAttributes' = 'com.glide.ui.GlideThreadAttributes';
    'GlideThreadUtil' = 'com.glide.util.ThreadUtil';
    'GlideTime' = 'com.glide.glideobject.GlideTime';
    'GlideTimelineFrameSeparator' = 'com.glide.schedules.TimelineFrameSeparator';
    'GlideTimelineItem' = 'com.glide.schedules.TimelineItem';
    'GlideTimelineSpan' = 'com.glide.schedules.TimelineSpan';
    'GlideTransaction' = 'com.glide.sys.Transaction';
    'GlideTransactionManager' = 'com.glide.sys.TransactionManager';
    'GlideTransferAuditDataHelper' = 'com.glide.audit.TransferAuditDataHelper';
    'GlideTransformer' = 'com.glide.db.impex.transformer.Transformer';
    'GlideTreePicker' = 'com.glide.ui.TreePicker';
    'GlideTSAnalysisViewer' = 'com.glide.ts.cluster.TSAnalysisViewer';
    'GlideTSAnalyticsProcessor' = 'com.glide.ts.cluster.TSAnalyticsProcessor';
    'GlideTSChainsHandler' = 'com.glide.ts.trends.TSChainsHandler';
    'GlideTSChainsLoader' = 'com.glide.ts.trends.TSChainsLoader';
    'GlideTSChainsPusher' = 'com.glide.ts.trends.TSChainsPusher';
    'GlideTSChainsSummarizer' = 'com.glide.ts.trends.TSChainsSummarizer';
    'GlideTSClusterDefinitions' = 'com.glide.ts.cluster.TSClusterDefinitions';
    'GlideTSDebug' = 'com.glide.ts.util.TSDebug';
    'GlideTSDidYouMean' = 'com.glide.ts.util.TSDidYouMean';
    'GlideTSGlobalKeywordSummarizer' = 'com.glide.ts.trends.TSGlobalKeywordSummarizer';
    'GlideTSIndexStatistician' = 'com.glide.ts.stats.TSIndexStatistician';
    'GlideTSIndexStopGenerator' = 'com.glide.ts.stats.TSIndexStopGenerator';
    'GlideTSIndexTables' = 'com.glide.ts.indexer.TSIndexTables';
    'GlideTSKeywordHandler' = 'com.glide.ts.trends.TSKeywordHandler';
    'GlideTSKeywordLoader' = 'com.glide.ts.trends.TSKeywordLoader';
    'GlideTSKeywordPusher' = 'com.glide.ts.trends.TSKeywordPusher';
    'GlideTSMoversViewer' = 'com.glide.ts.cluster.TSMoversViewer';
    'GlideTSSearchStatistician' = 'com.glide.ts.stats.TSSearchStatistician';
    'GlideTSSearchSummary' = 'com.glide.ts.trends.TSSearchSummary';
    'GlideTSTopSearches' = 'com.glide.ts.util.TSTopSearches';
    'GlideTSUtil' = 'com.glide.ts.util.TSUtil';
    'GlideTSVersion' = 'com.glide.ts.TSVersion';
    'GlideUIAction' = 'com.glide.ui.action.UIAction';
    'GlideUISession' = 'com.glide.ui.Session';
    'GlideUnloader' = 'com.glide.db.impex.Unloader';
    'GlideUpdateManager2' = 'com.glide.update.UpdateManager2';
    'GlideUpdateSet' = 'com.glide.update.UpdateSet';
    'GlideUpdateSetController' = 'com.glide.system_update_set.UpdateSetController';
    'GlideUpdateSetPreviewer' = 'com.glide.update.UpdateSetPreviewer';
    'GlideUpdateSetWorker' = 'com.glide.update.UpdateSetWorker';
    'GlideUpdateSyncher' = 'com.glide.policy.UpdateSyncher';
    'GlideUpdateTableChoiceList' = 'com.glide.script.UpdateTableChoiceList';
    'GlideUpgrade' = 'com.glide.sys.Upgrade';
    'GlideUpgradeArtifactManager' = 'com.glide.misc.UpgradeArtifactManager';
    'GlideUpgradeLog' = 'com.glide.update.UpgradeLog';
    'GlideUpgradeMonitor' = 'com.glide.update.UpgradeMonitor';
    'GlideURI' = 'com.glide.ui.GlideURI';
    'GlideURL' = 'com.glide.util.GlideURL';
    'GlideURLUTF8Encoder' = 'com.glide.util.URLUTF8Encoder';
    'GlideURLUtil' = 'com.glide.util.URLUtil';
    'GlideUser' = 'com.glide.sys.User';
    'GlideUserAuthenticator' = 'com.glide.sys.UserAuthenticator';
    'GlideUserGroup' = 'com.glide.sys.UserGroup';
    'GlideUtil' = 'com.glide.util.GlideUtil';
    'GlideViewRuleNavigator' = 'com.glide.ui.ViewRuleNavigator';
    'GlideWarDeleter' = 'com.glide.misc.WarDeleter';
    'GlideWarDownloader' = 'com.glide.misc.WarDownloader';
    'GlideWhiteListManager' = 'com.glide.script.api.GlideWhiteListManager';
    'GlideWikiModel' = 'com.glide.wiki.GlideWikiModel';
    'GlideWorkerThread' = 'com.glide.worker.WorkerThread';
    'GlideWorkerThreadManager' = 'com.glide.sys.WorkerThreadManager';
    'GlideWSClient' = 'com.glide.util.WSClient';
    'GlideWSDefinition' = 'com.glide.wsdlreader.WSDefinition';
    'GlideWSDLReader' = 'com.glide.wsdlreader.GlideWSDLReader';
    'GlideXMLChoiceListSerializer' = 'com.glide.choice.XMLChoiceListSerializer';
    'GlideXMLDocument' = 'com.glide.util.XMLDocument';
    'GlideXMLElementIterator' = 'com.glide.util.XMLElementIterator';
    'GlideXMLGlideRecordSerializer' = 'com.glide.processors.xmlhttp.XMLGlideRecordSerializer';
    'GlideXMLParameters' = 'com.glide.util.XMLParameters';
    'GlideXMLStats' = 'com.glide.ui.XMLStats';
    'GlideXMLSysMetaSerializer' = 'com.glide.processors.xmlhttp.XMLSysMetaSerializer';
    'GlideXMLUtil' = 'com.glide.util.XMLUtil';
    'GlideZipUtil' = 'com.glide.util.ZipUtil';
    'RhinoEnvironment' = 'com.glide.script.RhinoEnvironment';
    'RhinoHelper' = 'com.glide.script.RhinoHelper';
    'SecurelyAccess' = 'com.glide.sys.util.SecurelyAccess';
    'ServiceAPI' = 'com.glide.service_api.ServiceAPI';
    'SncAddress32Bit' = 'com.snc.commons.networks.Address32Bit';
    'SncAliasApplier' = 'com.snc.field_normalization.AliasApplier';
    'SncAppFiles' = 'com.snc.apps.api.AppFiles';
    'SncApplicationFileListener' = 'com.snc.apps.db.ApplicationFileListener';
    'SncAppsAccess' = 'com.snc.apps.api.AppsAccess';
    'SncAppsUI' = 'com.snc.apps.api.AppsUI';
    'SncAuthentication' = 'com.snc.authentication.digest.Authentication';
    'SncBaselineCMDB' = 'com.snc.cmdb.BaselineCMDB';
    'SncBulkCopy' = 'com.snc.ha.clone.BulkCopy';
    'SncClassifiedProcess' = 'com.snc.discovery.sensor.ClassifiedProcess';
    'SncClassify' = 'com.snc.discovery.sensor.snmp.Classify';
    'SncCloneController' = 'com.snc.ha.clone.CloneController';
    'SncCloneInstance' = 'com.snc.ha.clone.instance.Instance';
    'SncCloneLogger' = 'com.snc.ha.clone.CloneLogger';
    'SncCloneTask' = 'com.snc.ha.clone.CloneTask';
    'SncCloneUtils' = 'com.snc.ha.clone.CloneUtils';
    'SncConfiguration' = 'com.snc.field_normalization.db.Configuration';
    'SncConfigurations' = 'com.snc.field_normalization.Configurations';
    'SncConnectionTest' = 'com.snc.ha.connectivity.ConnectionTest';
    'SncDBChangeManagerFactoryHA' = 'com.snc.db.clone.change.DBChangeManagerFactoryHA';
    'SncDeviceHistory' = 'com.snc.discovery.logging.DeviceHistory';
    'SncDiscoveryCancel' = 'com.snc.discovery.DiscoveryCancel';
    'SncDiscoveryClassification' = 'com.snc.discovery.DiscoveryClassification';
    'SncDiscoveryLog' = 'com.snc.discovery.logging.DiscoveryLog';
    'SncDiscoveryRanges' = 'com.snc.commons.networks.DiscoveryRanges';
    'SncDiscoveryRangesDB' = 'com.snc.discovery.DiscoveryRangesDB';
    'SncDiscoveryReconciler' = 'com.snc.discovery.database.DiscoveryReconciler';
    'SncDiscoverySNMPClassification' = 'com.snc.discovery.sensor.snmp.DiscoverySNMPClassificatio';
    'SncDiscoveryUtils' = 'com.snc.discovery.DiscoveryUtils';
    'SncDropBackupTablesTask' = 'com.snc.ha.clone.instance.DropBackupTablesTask';
    'SncDropTablesTask' = 'com.snc.ha.clone.DropTablesTask';
    'SncEC2Properties' = 'com.snc.ec2.EC2Properties';
    'SncECMDBUtil' = 'com.snc.cmdb.ECMDBUtil';
    'SncElrondClient' = 'com.snc.customer_logon.ElrondClient';
    'SncExpert' = 'com.snc.expert.Expert';
    'SncExpertInstance' = 'com.snc.expert.ExpertInstance';
    'SncExpertPanel' = 'com.snc.expert.ExpertPanel';
    'SncExtantDataJob' = 'com.snc.field_normalization.db.ExtantDataJob';
    'SncExtantDataJobState' = 'com.snc.field_normalization.ExtantDataJobState';
    'SncFailoverController' = 'com.snc.da.gateway.replication.FailoverController';
    'SncFileTree' = 'com.snc.apps.file.FileTree';
    'SncGatewayCache' = 'com.snc.da.gateway.GatewayCache';
    'SncGatewayClone' = 'com.snc.da.gateway.clone.GatewayClone';
    'SncGatewayPluginStartup' = 'com.snc.da.gateway.replication.GatewayPluginStartup';
    'SncGatewayTruncateHierarchy' = 'com.snc.da.gateway.clone.GatewayTruncateHierarchy';
    'SncHAClone' = 'com.snc.ha.clone.HAClone';
    'SncHAConnectionTest' = 'com.snc.ha.connectivity.HAConnectionTest';
    'SncHADatabaseCheck' = 'com.snc.ha.tablecheck.HADatabaseCheck';
    'SncHAPairingUtils' = 'com.snc.ha.HAPairingUtils';
    'SncHAReplicationController' = 'com.snc.ha.HAReplicationController';
    'SncHAReplicationQueueSnapshotBuilder' = 'com.snc.ha.tablecheck.HAReplicationQueueSnapshotBuilder';
    'SncHATableCheck' = 'com.snc.ha.tablecheck.HATableCheck';
    'SncHATableCheckThread' = 'com.snc.ha.tablecheck.HATableCheckThread';
    'SncHATableQuickCheck' = 'com.snc.ha.tablecheck.HATableQuickCheck';
    'SncHATableRepair' = 'com.snc.ha.tablecheck.HATableRepair';
    'SncHAUtils' = 'com.snc.ha.HAUtils';
    'SncHostname' = 'com.snc.discovery.utils.Hostname';
    'SncInstanceClone' = 'com.snc.ha.clone.instance.InstanceClone';
    'SncInstanceConnectionTest' = 'com.snc.ha.connectivity.InstanceConnectionTest';
    'SncInstanceRollback' = 'com.snc.ha.clone.instance.InstanceRollback';
    'SncIPAddressV4' = 'com.snc.commons.networks.IPAddressV4';
    'SncIPAddressV6' = 'com.snc.commons.networks.IPAddressV6';
    'SncIPAuthenticator' = 'com.snc.ipauthenticator.IPAuthenticator';
    'SncIPIterator' = 'com.snc.commons.networks.IPIterator';
    'SncIPList' = 'com.snc.commons.networks.IPList';
    'SncIPMetaCollection' = 'com.snc.commons.networks.IPMetaCollection';
    'SncIPNetmaskV4' = 'com.snc.commons.networks.IPNetmaskV4';
    'SncIPNetworkV4' = 'com.snc.commons.networks.IPNetworkV4';
    'SncIPRangeV4' = 'com.snc.commons.networks.IPRangeV4';
    'SncLayer7Connections' = 'com.snc.discovery.Layer7Connections';
    'SncMACAddress' = 'com.snc.commons.networks.MACAddress';
    'SncMACAddressMfr' = 'com.snc.commons.networks.MACAddressMfr';
    'SncMakeAndModel' = 'com.snc.cmdb.MakeAndModel';
    'SncMIDConfigParameter' = 'com.snc.commons.MIDConfigParameter';
    'SncMIDServerRangesDB' = 'com.snc.discovery.MIDServerRangesDB';
    'SncNormalCoalescer' = 'com.snc.field_normalization.NormalCoalescer';
    'SncNormalizer' = 'com.snc.field_normalization.Normalizer';
    'SncNormalValueChanger' = 'com.snc.field_normalization.NormalValueChanger';
    'SncNotifySNC' = 'com.snc.system.NotifySNC';
    'SncPendingValueCollector' = 'com.snc.field_normalization.PendingValueCollector';
    'SncPreferences' = 'com.snc.field_normalization.Preferences';
    'SncPrintServerHelper' = 'com.snc.discovery.database.PrintServerHelper';
    'SncProbe' = 'com.snc.discovery.Probe';
    'SncProbeRunTime' = 'com.snc.discovery.perfmon.ProbeRunTime';
    'SncRBSensorProcessor' = 'com.snc.discovery_automation.RBSensorProcessor';
    'SncReadTest' = 'com.snc.ha.ReadTest';
    'SncReclassifyCI' = 'com.snc.cmdb.ReclassifyCI';
    'SncRelationships' = 'com.snc.cmdb.Relationships';
    'SncReplicationAdvisor' = 'com.snc.db.replicate.ReplicationAdvisor';
    'SncReplicationEngine' = 'com.snc.db.replicate.ReplicationEngine';
    'SncReplicationQueue' = 'com.snc.db.replicate.ReplicationQueue';
    'SncRequestCredentials' = 'com.snc.customer_logon.RequestCredentials';
    'SncRuleApplier' = 'com.snc.field_normalization.RuleApplier';
    'SncRuleToPending' = 'com.snc.field_normalization.RuleToPending';
    'SncSAMCounter' = 'com.snc.software_asset_management.SAMCounter';
    'SncScheduleDropBackupTablesTask' = 'com.snc.ha.clone.instance.ScheduleDropBackupTablesTask';
    'SncScrapeIANAEnterpriseNumbers' = 'com.snc.discovery.database.ScrapeIANAEnterpriseNumbers';
    'SncScrapeIEEENICCodes' = 'com.snc.discovery.database.ScrapeIEEENICCodes';
    'SncSendNotificationTask' = 'com.snc.ha.clone.instance.SendNotificationTask';
    'SncSensorProcessor' = 'com.snc.discovery.SensorProcessor';
    'SncSerialNumber' = 'com.snc.discovery.SerialNumber';
    'SncSerialNumberList' = 'com.snc.discovery.SerialNumberList';
    'SncSessionMate' = 'com.snc.discovery.SessionMate';
    'SncSimmerControl' = 'com.snc.ha.clone.instance.SimmerControl';
    'SncTableEditor' = 'com.snc.apps.api.TableEditor';
    'SncTableRotation' = 'com.snc.db.replicate.TableRotation';
    'SncTableRotationExtension' = 'com.snc.db.replicate.TableRotationExtension';
    'SncTableRotationExtensions' = 'com.snc.db.replicate.TableRotationExtensions';
    'SncTableRotationWatcher' = 'com.snc.db.replicate.TableRotationWatcher';
    'SncTransformApplier' = 'com.snc.field_normalization.TransformApplier';
    'SncTreeBuilder' = 'com.snc.apps.tree.TreeBuilder';
    'SncTriggerSynchronizer' = 'com.snc.automation.TriggerSynchronizer';
    'SncValue' = 'com.snc.field_normalization.db.Value';
    'TestExtension' = 'com.glide.junit.misc.TestExtension';
    'UINotification' = 'com.glide.ui.UINotification';
    'java.lang.String' = 'java.lang.Object';
    'java.lang.Boolean' = 'java.lang.Object';
    'java.lang.StringBuffer' = 'java.lang.Object';
    'java.lang.Byte' = 'java.lang.Number';
    'java.lang.Double' = 'java.lang.Number';
    'java.lang.Float' = 'java.lang.Number';
    'java.lang.Integer' = 'java.lang.Number';
    'java.lang.Long' = 'java.lang.Number';
    'java.lang.Short' = 'java.lang.Number';
    'java.lang.Character' = 'java.lang.Number';
    'java.util.List' = 'java.lang.Object';
    'java.util.Map' = 'java.lang.Object';
    'java.util.Set' = 'java.lang.Object';
    'java.util.TimeZone' = 'java.lang.Object';
    'java.time.Duration' = 'java.lang.Object';
    'java.time.LocalDate' = 'java.lang.Object';
    'java.time.LocalDateTime' = 'java.lang.Object';
    'java.time.LocalTime' = 'java.lang.Object';
    'java.time.MonthDay' = 'java.lang.Object';
    'java.time.Year' = 'java.lang.Object';
    'java.time.YearMonth' = 'java.lang.Object';
    'java.time.ZonedDateTime' = 'java.lang.Object';
    'java.time.ZoneId' = 'java.lang.Object';
};

$TypeMap = @{
    Password2 = 'GlideElementPassword2'
    Password = 'GlideElementPassword'
    Translated = 'com.glide.glideobject.Translated';
    DayOfWeek = 'com.glide.glideobject.DayOfWeek';
    WeekOfMonth = 'com.glide.glideobject.WeekOfMonth';
    MonthOfYear = 'com.glide.glideobject.MonthOfYear';
    Journal = 'com.glide.glideobject.Journal';
    Price = 'GlideElementPrice';
    Currency = 'GlideElementCurrency';
    URL = 'GlideElementURL';
    UserImage = 'GlideElementUserImage';
    GlideObject = 'GlideElementGlideObject';
    GlideDueDate = 'com.glide.glideobject.GlideDueDate';
    Conditions = "GlideElementConditions";
    GlideUserInput = 'com.glide.glideobject.GlideUserInput';
    FileAttachment = "GlideElementFileAttachment";
    IntegerTime = "com.glide.glideobject.IntegerTime";
    GlideHTML = 'com.glide.glideobject.GlideHTML';
}

$UndefinedTypes = @('StringBoolean', 'GlideObject', 'MaskCode', 'FileAttachment', 'GlidePreciseTime', 'Price', 'Currency', 'URL', 'Password2', 'Conditions', 'UserImage', 'Password', 'IntegerTime', 'IntegerDate', 'GlideElementHierarchicalVariables',
    'Translated', 'GlideUserInput', 'GlideDueDate', 'Journal', 'WeekOfMonth', 'GlideHTML', 'MonthOfYear', 'DayOfWeek', 'GlideappWorkflow',"GlideClusterState","GlideIOMonitor","GlideJSTestUtil","GlidePartitionMonitor","GlideProcessRunner",
    "GlideRhinoScope","GlideRhinoTestCase","GlideShellCommand","GlideSQLChildMonitor","GlideSQLDeleteMonitor","GlideSQLInsertMonitor","GlideSQLResponseMonitor","GlideSQLSelectMonitor","GlideSQLUpdateMonitor","GlideTestAgent","GlideTomcatHelper",
    "SncASensor","SncGatewayConnectivity","SncGlideGateways","SncJRobinGraphDef","SncOnCallRotation","SncRrdGlideBackendFactory", 'GlideTomcatHelper');
    
$SnTypes = @{
    password2 = @{ sys_name = "Password (2 Way Encrypted)"; type_name = "GlideElementPassword2"; scalar_type = "string"; class_name = "Password2"; scalar_length = 255; use_original_value = $true };
    compressed = @{ sys_name = "Compressed"; type_name = "GlideElementCompressed"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    glide_encrypted = @{ sys_name = "Encrypted Text"; type_name = ""; scalar_type = "string"; class_name = "GlideElementEncrypted"; scalar_length = 65536; use_original_value = $true };
    timer = @{ sys_name = "timer"; type_name = "GlideElementGlideObject"; scalar_type = "datetime"; class_name = "com.glide.glideobject.GlideDuration"; use_original_value = $true; hidden = $true };
    source_table = @{ sys_name = "Source Table"; type_name = ""; scalar_type = "string"; class_name = "com.snc.apps.glide_elements.GlideElementSourceTable"; scalar_length = 80; use_original_value = $true; hidden = $true };
    time = @{ sys_name = "Basic Time"; type_name = ""; scalar_type = "time"; use_original_value = $true; hidden = $true };
    reminder_field_name = @{ sys_name = "Reminder Field Name"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    radio = @{ sys_name = "Radio Button Choice"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    field_list = @{ sys_name = "Field List"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    metric_gauge = @{ sys_name = "Metric Gauge"; type_name = ""; scalar_type = "float"; hidden = $true };
    metric_counter = @{ sys_name = "Metric Counter"; type_name = ""; scalar_type = "float"; hidden = $true };
    metric_derive = @{ sys_name = "Metric Derive"; type_name = ""; scalar_type = "float"; hidden = $true };
    metric_absolute = @{ sys_name = "Metric Absolute"; type_name = ""; scalar_type = "float"; hidden = $true };
    sys_class_name = @{ sys_name = "sys_class_name"; type_name = "GlideElementSysClassName"; scalar_type = "string"; class_name = "com.glide.glideobject.SysClassName"; use_original_value = $true; hidden = $true };
    html_template = @{ sys_name = "HTML Template"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 65000; use_original_value = $true; hidden = $true };
    glide_precise_time = @{ sys_name = "glide_precise_time"; type_name = ""; scalar_type = "string"; class_name = "GlidePreciseTime"; use_original_value = $true; hidden = $true };
    ip_address = @{ sys_name = "IP Address"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    formula = @{ sys_name = "Formula"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    boolean = @{ sys_name = "True/False"; type_name = "GlideElementBoolean"; scalar_type = "boolean"; use_original_value = $true; javaType = 'java.lang.Boolean' };
    string_boolean = @{ sys_name = "string_boolean"; type_name = ""; scalar_type = "string"; class_name = "StringBoolean"; use_original_value = $true; hidden = $true };
    mid_config = @{ sys_name = "MID Server Configuration"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    composite_field = @{ sys_name = "Composite Field"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 300; use_original_value = $true; hidden = $true };
    source_id = @{ sys_name = "Source ID"; type_name = ""; scalar_type = "GUID"; class_name = "com.snc.apps.glide_elements.GlideElementSourceId"; use_original_value = $true; hidden = $true };
    related_tags = @{ sys_name = "Related Tags"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    data_array = @{ sys_name = "Data Array"; type_name = ""; scalar_type = "string"; class_name = "com.snc.datastructure.GlideElementDataArray"; scalar_length = 65535; use_original_value = $true; hidden = $true };
    translated = @{ sys_name = "translated"; type_name = "GlideElementGlideObject"; scalar_type = "string"; class_name = "Translated"; use_original_value = $true; hidden = $true; glideType = 'com.glide.glideobject.Translated' };
    day_of_week = @{ sys_name = "day_of_week"; type_name = "GlideElementGlideObject"; scalar_type = "integer"; class_name = "DayOfWeek"; use_original_value = $true; hidden = $true; glideType = 'com.glide.glideobject.DayOfWeek' };
    data_structure = @{ sys_name = "Data Structure"; type_name = "GlideElementGlideObject"; scalar_type = "string"; class_name = "com.snc.datastructure.GlideElementDataStructure"; scalar_length = 800; use_original_value = $true };
    week_of_month = @{ sys_name = "week_of_month"; type_name = "GlideElementGlideObject"; scalar_type = "integer"; class_name = "WeekOfMonth"; use_original_value = $true; hidden = $true; glideType = 'com.glide.glideobject.WeekOfMonth' };
    month_of_year = @{ sys_name = "month_of_year"; type_name = "GlideElementGlideObject"; scalar_type = "integer"; class_name = "MonthOfYear"; use_original_value = $true; hidden = $true; glideType = 'com.glide.glideobject.MonthOfYear' };
    short_table_name = @{ sys_name = "Short Table Name"; type_name = "GlideElementShortTableName"; scalar_type = "string"; scalar_length = 40; use_original_value = $true; hidden = $true };
    due_date = @{ sys_name = "Due Date"; type_name = "GlideElementGlideObject"; scalar_type = "datetime"; class_name = "GlideDueDate"; glideType = 'com.glide.glideobject.GlideDueDate' };
    icon = @{ sys_name = "Icon"; type_name = "GlideElementIcon"; scalar_type = "string"; scalar_length = 100; use_original_value = $true };
    password = @{ sys_name = "password"; type_name = "GlideElementPassword"; scalar_type = "string"; class_name = "Password"; use_original_value = $true };
    glide_action_list = @{ sys_name = "UI Action List"; type_name = "GlideElementGlideObject"; scalar_type = "string"; class_name = "GlideActionList"; scalar_length = 1024; hidden = $true; glideType = 'com.glide.glideobject.GlideActionList' };
    sys_class_path = @{ sys_name = "System Class path"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    approval_rules = @{ sys_name = "Approval Rules"; type_name = ""; scalar_type = "string"; scalar_length = 4000; use_original_value = $true; hidden = $true };
    translated_html = @{ sys_name = "Translated HTML"; type_name = "GlideElementTranslatedHTML"; scalar_type = "string"; scalar_length = 65536; use_original_value = $true };
    variable_template_value = @{ sys_name = "Variable template value"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    date = @{ sys_name = "Other Date"; type_name = ""; scalar_type = "date"; class_name = "GlideDate"; hidden = $true };
    reference_name = @{ sys_name = "reference_name"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    audio = @{ sys_name = "Audio"; type_name = "GlideElementAudio"; scalar_type = "string"; use_original_value = $true };
    properties = @{ sys_name = "CSS"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 4000; use_original_value = $true; hidden = $true };
    workflow_conditions = @{ sys_name = "Workflow Conditions"; type_name = "GlideElementWorkflowConditions"; scalar_type = "string"; hidden = $true };
    conditions = @{ sys_name = "conditions"; type_name = "GlideElementConditions"; scalar_type = "string"; scalar_length = 4000 };
    script = @{ sys_name = "script"; type_name = "GlideElementScript"; scalar_type = "string"; scalar_length = 4000; use_original_value = $true };
    html = @{ sys_name = "HTML"; type_name = "GlideElementGlideObject"; scalar_type = "string"; class_name = "GlideHTML"; scalar_length = 65536; use_original_value = $true; glideType = 'com.glide.glideobject.GlideHTML' };
    template_value = @{ sys_name = "Template Value"; type_name = "GlideElementWorkflowConditions"; scalar_type = "string"; class_name = "Conditions"; scalar_length = 65000; hidden = $true };
    xml = @{ sys_name = "XML"; type_name = "GlideElementScript"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    ip_addr = @{ sys_name = "IP Address (Validated IPV4, IPV6)"; type_name = ""; scalar_type = "string"; use_original_value = $true };
    records = @{ sys_name = "Records"; type_name = ""; scalar_type = "string"; scalar_length = 1024; use_original_value = $true; hidden = $true };
    multi_small = @{ sys_name = "multi_small"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    field_name = @{ sys_name = "Field Name"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 80; use_original_value = $true };
    GUID = @{ sys_name = "Sys ID"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 32; use_original_value = $true; hidden = $true };
    counter = @{ sys_name = "Counter"; type_name = "GlideElementCounter"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    ph_number = @{ sys_name = "ph_number"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    journal_input = @{ sys_name = "Journal Input"; type_name = "GlideElementGlideObject"; scalar_type = "string"; class_name = "Journal"; glideType = 'com.glide.glideobject.Journal' };
    journal_list = @{ sys_name = "Journal List"; type_name = "GlideElementGlideObject"; scalar_type = "string"; class_name = "Journal"; glideType = 'com.glide.glideobject.Journal' };
    choice = @{ sys_name = "Choice"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true };
    reference = @{ sys_name = "Reference"; type_name = "GlideElementReference"; scalar_type = "GUID"; use_original_value = $true };
    color_display = @{ sys_name = "Color Display"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    days_of_week = @{ sys_name = "Days of Week"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    source_name = @{ sys_name = "Source Name"; type_name = "GlideElementSourceName"; scalar_type = "string"; class_name = "com.snc.apps.glide_elements.GlideElementSourceName"; use_original_value = $true; hidden = $true };
    decoration = @{ sys_name = "Decoration"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 255; use_original_value = $true; hidden = $true };
    longint = @{ sys_name = "Long"; type_name = "GlideElement"; scalar_type = "longint"; use_original_value = $true };
    color = @{ sys_name = "Color"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true };
    string_full_utf8 = @{ sys_name = "String (Full UTF-8)"; type_name = "GlideElementFullUTF8"; scalar_type = "string"; scalar_length = 255; use_original_value = $true };
    user_roles = @{ sys_name = "user_roles"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 255; use_original_value = $true; hidden = $true };
    variable_conditions = @{ sys_name = "variable_conditions"; type_name = "GlideElementVariableConditions"; scalar_type = "string"; hidden = $true };
    url = @{ sys_name = "URL"; type_name = "GlideElementURL"; scalar_type = "string"; class_name = "URL"; scalar_length = 1024 };
    string = @{ sys_name = "String"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true };
    email_script = @{ sys_name = "email_script"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    bootstrap_color = @{ sys_name = "Bootstrap color"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    documentation_field = @{ sys_name = "Documentation Field"; type_name = "GlideElementDocumentation"; scalar_type = "string"; class_name = "GlideElementTranslatedField"; scalar_length = 80; use_original_value = $true; hidden = $true };
    glyphicon = @{ sys_name = "Glyph Icon (Bootstrap)"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    simple_name_values = @{ sys_name = "Name-Value Pairs"; type_name = ""; scalar_type = "string"; scalar_length = 4000; use_original_value = $true };
    percent_complete = @{ sys_name = "Percent Complete"; type_name = "GlideElementNumeric"; scalar_type = "decimal"; use_original_value = $true };
    char = @{ sys_name = "Char"; type_name = "GlideElement"; scalar_type = "GUID"; scalar_length = 32; use_original_value = $true; hidden = $true };
    mask_code = @{ sys_name = "mask_code"; type_name = ""; scalar_type = "string"; class_name = "MaskCode"; use_original_value = $true; hidden = $true };
    version = @{ sys_name = "Version"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    long = @{ sys_name = "Long Integer String"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    auto_number = @{ sys_name = "Auto Number"; type_name = ""; scalar_type = "string"; hidden = $true };
    variables = @{ sys_name = "Variables"; type_name = "GlideElementVariables"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    datetime = @{ sys_name = "Basic Date/Time"; type_name = ""; scalar_type = "datetime"; class_name = "com.glide.glideobject.GlideDateTime"; use_original_value = $true; hidden = $true };
    repeat_type = @{ sys_name = "Repeat Type"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    tree_code = @{ sys_name = "Tree Code"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    composite_name = @{ sys_name = "Composite Name"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    schedule_date_time = @{ sys_name = "Schedule Date/Time"; type_name = "GlideElementGlideObject"; scalar_type = "string"; class_name = "ScheduleDateTime"; hidden = $true; glideType = 'com.glide.glideobject.ScheduleDateTime' };
    float = @{ sys_name = "Floating Point Number"; type_name = "GlideElementNumeric"; scalar_type = "float"; use_original_value = $true };
    index_name = @{ sys_name = "Index Name"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    html_script = @{ sys_name = "HTML Script"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    internal_type = @{ sys_name = "Internal Type"; type_name = "GlideElementInternalType"; scalar_type = "string"; class_name = "com.glide.script.glide_elements.GlideElementInternalType"; use_original_value = $true; hidden = $true };
    phone_number = @{ sys_name = "Phone Number (Unused)"; type_name = ""; scalar_type = "string"; hidden = $true };
    collection = @{ sys_name = "Collection"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    breakdown_element = @{ sys_name = "Breakdown Element"; type_name = "GlideElementBreakdownElement"; scalar_type = "GUID"; class_name = "com.snc.pa.dc.GlideElementBreakdownElement"; scalar_length = 32; use_original_value = $true; hidden = $true };
    glide_date = @{ sys_name = "Date"; type_name = "GlideElementGlideObject"; scalar_type = "date"; class_name = "GlideDate"; use_original_value = $true; glideType = 'com.glide.glideobject.GlideDate' };
    glide_date_time = @{ sys_name = "Date-time"; type_name = "GlideElementGlideObject"; scalar_type = "datetime"; class_name = "GlideDateTime"; use_original_value = $true; glideType = 'com.glide.glideobject.GlideDateTime' };
    glide_time = @{ sys_name = "Time"; type_name = "GlideElementGlideObject"; scalar_type = "datetime"; class_name = "GlideTime"; use_original_value = $true; glideType = 'com.glide.glideobject.GlideTime' };
    video = @{ sys_name = "Video"; type_name = ""; scalar_type = "string"; use_original_value = $true };
    short_field_name = @{ sys_name = "Short Field Name"; type_name = "GlideElementShortFieldName"; scalar_type = "string"; scalar_length = 40; use_original_value = $true; hidden = $true };
    wiki_text = @{ sys_name = "Wiki"; type_name = "GlideElementWikiText"; scalar_type = "string"; class_name = "com.glide.wiki.GlideElementWikiText"; scalar_length = 65536; use_original_value = $true };
    document_id = @{ sys_name = "Document ID"; type_name = "GlideElementDocumentId"; scalar_type = "GUID"; class_name = "com.glide.script.glide_elements.GlideElementDocumentId"; scalar_length = 32; use_original_value = $true };
    order_index = @{ sys_name = "Order Index"; type_name = "GlideElementNumeric"; scalar_type = "integer"; hidden = $true };
    glide_duration = @{ sys_name = "Duration"; type_name = "GlideElementGlideObject"; scalar_type = "datetime"; class_name = "GlideDuration"; use_original_value = $true; glideType = 'com.glide.glideobject.GlideDuration' };
    data_object = @{ sys_name = "Data Object"; type_name = "GlideElementDataObject"; scalar_type = "string"; class_name = "com.snc.datastructure.GlideElementDataObject"; scalar_length = 65535; use_original_value = $true; hidden = $true };
    integer = @{ sys_name = "Integer"; type_name = "GlideElementNumeric"; scalar_type = "integer"; use_original_value = $true };
    phone_number_e164 = @{ sys_name = "Phone Number (E164)"; type_name = ""; scalar_type = "string"; class_name = "com.glide.script.glide_elements.GlideElementPhoneNumber" };
    wide_text = @{ sys_name = "wide_text"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    slushbucket = @{ sys_name = "Slush Bucket"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 4000; use_original_value = $true; hidden = $true };
    nl_task_int1 = @{ sys_name = "nl_task_int1"; type_name = ""; scalar_type = "integer"; use_original_value = $true; hidden = $true };
    user_input = @{ sys_name = "user_input"; type_name = "GlideElementGlideObject"; scalar_type = "string"; class_name = "GlideUserInput"; use_original_value = $true; hidden = $true; glideType = 'com.glide.glideobject.GlideUserInput' };
    name_values = @{ sys_name = "Name/Values"; type_name = "GlideElementNameValue"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    email = @{ sys_name = "email"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    script_plain = @{ sys_name = "Script (Plain)"; type_name = "GlideElementScript"; scalar_type = "string"; scalar_length = 4000; use_original_value = $true };
    multi_two_lines = @{ sys_name = "multi_two_lines"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    translated_field = @{ sys_name = "Translated Field"; type_name = "GlideElementTranslatedField"; scalar_type = "string"; class_name = "GlideElementTranslatedField"; use_original_value = $true; hidden = $true };
    glide_var = @{ sys_name = "Glide Var"; type_name = "GlideElementGlideVar"; scalar_type = "string"; class_name = "com.glide.vars.GlideElementGlideVar"; use_original_value = $true; hidden = $true };
    catalog_preview = @{ sys_name = "Catalog Preview"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    replication_payload = @{ sys_name = "Replication Payload"; type_name = "GlideElementReplicationPayload"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    int = @{ sys_name = "Integer String"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    repeat_count = @{ sys_name = "Repeat Count"; type_name = "GlideElementNumeric"; scalar_type = "integer"; hidden = $true };
    wms_job = @{ sys_name = "wms_job"; type_name = ""; scalar_type = "string"; class_name = "GlideObject"; use_original_value = $true; hidden = $true };
    domain_id = @{ sys_name = "domain_id"; type_name = "GlideElementDomainId"; scalar_type = "GUID"; class_name = "com.glide.script.glide_elements.GlideElementDomainId"; scalar_length = 32; use_original_value = $true };
    workflow = @{ sys_name = "workflow"; type_name = "GlideElementWorkflow"; scalar_type = "string"; scalar_length = 80; use_original_value = $true };
    table_name = @{ sys_name = "Table Name"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 80; use_original_value = $true };
    json = @{ sys_name = "JSON"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 4000; use_original_value = $true; hidden = $true };
    glide_list = @{ sys_name = "List"; type_name = "GlideElementGlideObject"; scalar_type = "string"; class_name = "GlideList"; scalar_length = 1024; glideType = 'com.glide.glideobject.GlideList' };
    user_image = @{ sys_name = "Image"; type_name = "GlideElementUserImage"; scalar_type = "string"; class_name = "UserImage" };
    file_attachment = @{ sys_name = "File Attachment"; type_name = ""; scalar_type = "string"; class_name = "FileAttachment"; use_original_value = $true };
    translated_text = @{ sys_name = "Translated Text"; type_name = "GlideElementTranslatedText"; scalar_type = "string"; use_original_value = $true };
    sysevent_name = @{ sys_name = "sysevent_name"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    sysrule_field_name = @{ sys_name = "sysrule_field_name"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    image = @{ sys_name = "image"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    auto_increment = @{ sys_name = "Auto Increment"; type_name = "GlideElement"; scalar_type = "longint"; use_original_value = $true; hidden = $true };
    integer_time = @{ sys_name = "Integer Time"; type_name = ""; scalar_type = "integer"; class_name = "IntegerTime"; hidden = $true };
    integer_date = @{ sys_name = "Integer Date"; type_name = "GlideElementGlideObject"; scalar_type = "integer"; class_name = "IntegerDate"; hidden = $true };
    tree_path = @{ sys_name = "Tree Path"; type_name = ""; scalar_type = "string"; use_original_value = $true; hidden = $true };
    journal = @{ sys_name = "Journal"; type_name = "GlideElementGlideObject"; scalar_type = "string"; class_name = "Journal"; use_original_value = $true; glideType = 'com.glide.glideobject.Journal' };
    external_names = @{ sys_name = "external_names"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true; hidden = $true };
    decimal = @{ sys_name = "Decimal"; type_name = "GlideElementNumeric"; scalar_type = "decimal"; use_original_value = $true };
    css = @{ sys_name = "CSS"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 4000; use_original_value = $true; hidden = $true };
    script_server = @{ sys_name = "script_server"; type_name = "GlideElement"; scalar_type = "string"; scalar_length = 4000; use_original_value = $true; hidden = $true };
    currency = @{ sys_name = "Currency"; type_name = "GlideElementCurrency"; scalar_type = "decimal"; class_name = "Currency"; scalar_length = 20; use_original_value = $true };
    price = @{ sys_name = "Price"; type_name = "GlideElementPrice"; scalar_type = "decimal"; class_name = "Price"; scalar_length = 20; use_original_value = $true };
    condition_string = @{ sys_name = "Condition String"; type_name = "GlideElement"; scalar_type = "string"; use_original_value = $true }
};

$CurrentLine = '    ';
((($InaccessibleTypes | Where-Object { -not $TypeInheritance.ContainsValue($_) }) | Sort-Object) | ForEach-Object {
    $t = "`"$_`"";
    if ($CurrentLine.Length + $t.Length -gt 240) {
        $CurrentLine;
        $CurrentLine = "    $t, ";
    } else {
        $CurrentLine += " $t,";
    }
} | Out-String) + $CurrentLine;

<#
@(($SnTypes.Keys) | ForEach-Object {
    if (-not [string]::IsNullOrEmpty($SnTypes[$_].glideType)) { $SnTypes[$_].glideType }
    if (-not [string]::IsNullOrEmpty($SnTypes[$_].class_name)) { $SnTypes[$_].class_name }
    if (-not [string]::IsNullOrEmpty($SnTypes[$_].type_name)) { $SnTypes[$_].type_name }
} | ForEach-Object { if ($TypeMap.ContainsKey($_)) { $TypeMap[$_] } else { $_ } } | Select-Object -Unique) | ForEach-Object {
    if (-not ($TypeInheritance.ContainsKey($_) -or $TypeInheritance.ContainsValue($_))) {
        if ($Constructors -cnotcontains($_) -and $InaccessibleTypes -cnotcontains($_)) { $_ }
    }
}
StringBoolean
IntegerDate
MaskCode
GlidePreciseTime
#>

<#
comments_and_work_notes
comments
work_notes
watch_list
time_worked

var allConstructors = {
    "Boolean": Boolean, "Date": Date, "Glide": Glide, "GlideAbstractBucketCollector": GlideAbstractBucketCollector, "GlideAbstractDomainProvider": GlideAbstractDomainProvider, "GlideAbstractExecutionPlan": GlideAbstractExecutionPlan,
    "GlideAbstractListener": GlideAbstractListener,  "GlideAbstractRenderer": GlideAbstractRenderer, "GlideAction": GlideAction, "GlideActionList": GlideActionList, "GlideActionManager": GlideActionManager, "GlideActionURL": GlideActionURL,
    "GlideAJAXScheduleItem": GlideAJAXScheduleItem,  "GlideAJAXSchedulePage": GlideAJAXSchedulePage, "GlideAlertActions": GlideAlertActions, "GlideappAbstractChoiceListQuestion": GlideappAbstractChoiceListQuestion,
    "GlideappADSILoader": GlideappADSILoader,  "GlideappAJAXMapPage": GlideappAJAXMapPage, "GlideappCalculationHelper": GlideappCalculationHelper, "GlideappCart": GlideappCart, "GlideappCartItem": GlideappCartItem,
    "GlideappCatalogCategoryBatcher": GlideappCatalogCategoryBatcher,  "GlideappCatalogItem": GlideappCatalogItem, "GlideappCategory": GlideappCategory, "GlideappCategoryPopper": GlideappCategoryPopper,
    "GlideappCatItemPopper": GlideappCatItemPopper,  "GlideappChartParameters": GlideappChartParameters, "GlideappChatRoom": GlideappChatRoom, "GlideappChatRoom$Error": GlideappChatRoom$Error,
    "GlideappCheckBoxQuestion": GlideappCheckBoxQuestion,  "GlideappCMDBHelper": GlideappCMDBHelper, "GlideappCMDBSoftwareHelper": GlideappCMDBSoftwareHelper, "GlideappContainerAwareQuestionSet": GlideappContainerAwareQuestionSet,
    "GlideappContextDiagramProcessor": GlideappContextDiagramProcessor,  "GlideappDateQuestion": GlideappDateQuestion, "GlideappDateTimeQuestion": GlideappDateTimeQuestion, "GlideappDeliveryPlan": GlideappDeliveryPlan,
    "GlideappECCInputMessage": GlideappECCInputMessage,  "GlideappECCOutputMessage": GlideappECCOutputMessage, "GlideappECCQueueConnector": GlideappECCQueueConnector, "GlideappECCQueueProcessor": GlideappECCQueueProcessor,
    "GlideappECCResponseMessage": GlideappECCResponseMessage,  "GlideappExpandableText": GlideappExpandableText, "GlideappExpertPanelCatalogOrder": GlideappExpertPanelCatalogOrder, "GlideappFixes": GlideappFixes, "GlideappHome": GlideappHome,
    "GlideappHomePage": GlideappHomePage,  "GlideappHomePageFactory": GlideappHomePageFactory, "GlideappIECC": GlideappIECC, "GlideappIOUpgrade": GlideappIOUpgrade, "GlideappItemOptionsQuestionSet": GlideappItemOptionsQuestionSet,
    "GlideappJMSECCReceiver": GlideappJMSECCReceiver,  "GlideappJMSECCSender": GlideappJMSECCSender, "GlideappKBIncludes": GlideappKBIncludes, "GlideApplication": GlideApplication, "GlideApplicationModule": GlideApplicationModule,
    "GlideappListCollectorQuestion": GlideappListCollectorQuestion,  "GlideappLiveFeedEventHandler": GlideappLiveFeedEventHandler, "GlideappLiveFeedJournalWriter": GlideappLiveFeedJournalWriter,
    "GlideappLiveFeedUIAction": GlideappLiveFeedUIAction,  "GlideappLiveProfile": GlideappLiveProfile, "GlideappLiveUtils": GlideappLiveUtils, "GlideappLookupSelectQuestion": GlideappLookupSelectQuestion,
    "GlideappMessageTag": GlideappMessageTag,  "GlideappOrderGuide": GlideappOrderGuide, "GlideappProcessQueue": GlideappProcessQueue, "GlideappQuestion": GlideappQuestion, "GlideappQuestionChoice": GlideappQuestionChoice,
    "GlideappQueueHelper": GlideappQueueHelper,  "GlideappQueueReader": GlideappQueueReader, "GlideappReferenceQuestion": GlideappReferenceQuestion, "GlideappRequestItemWorkflow": GlideappRequestItemWorkflow,
    "GlideappRequestNew": GlideappRequestNew,  "GlideappScriptHelper": GlideappScriptHelper, "GlideappSecurityMask": GlideappSecurityMask, "GlideappSequencedQuestionSet": GlideappSequencedQuestionSet,
    "GlideappTaskApprovalHelper": GlideappTaskApprovalHelper,  "GlideappTimeAgo": GlideappTimeAgo, "GlideappUpdateVersion": GlideappUpdateVersion, "GlideappUpgradeQuestions": GlideappUpgradeQuestions,
    "GlideappValveProcessor": GlideappValveProcessor,  "GlideappVariable": GlideappVariable, "GlideappVariablePoolQuestionSet": GlideappVariablePoolQuestionSet, "GlideappWizardIntercept": GlideappWizardIntercept,
    "GlideappWMILoader": GlideappWMILoader,  "GlideappWorkflowHelper": GlideappWorkflowHelper, "GlideappYesNoQuestion": GlideappYesNoQuestion, "GlideAQueryExplanation": GlideAQueryExplanation, "GlideArchiver": GlideArchiver,
    "GlideArchiveRecord": GlideArchiveRecord,  "GlideArchiveRestore": GlideArchiveRestore, "GlideArchiveStatus": GlideArchiveStatus, "GlideArchiveTable": GlideArchiveTable, "GlideARecurrence": GlideARecurrence,
    "GlideAttachmentIndexDocument": GlideAttachmentIndexDocument,  "GlideAttachmentIndexTypes": GlideAttachmentIndexTypes, "GlideAttributes": GlideAttributes, "GlideAuditDelete": GlideAuditDelete, "GlideAuditor": GlideAuditor,
    "GlideAutomationEncrypter": GlideAutomationEncrypter,  "GlideBaseTag": GlideBaseTag, "GlideBootstrap": GlideBootstrap, "GlideBoundedIntProperty": GlideBoundedIntProperty, "GlideCacheManager": GlideCacheManager,
    "GlideCalendar": GlideCalendar,  "GlideCalendarWeekEntry": GlideCalendarWeekEntry, "GlideCanceledUITransaction": GlideCanceledUITransaction, "GlideCascadeFromDelete": GlideCascadeFromDelete,
    "GlideCatalogCloneWorker": GlideCatalogCloneWorker,  "GlideChannel": GlideChannel, "GlideChannelManager": GlideChannelManager, "GlideChannelMessage": GlideChannelMessage, "GlideChartFieldColors": GlideChartFieldColors,
    "GlideChartGeneratorFactory": GlideChartGeneratorFactory,  "GlideChartUtil": GlideChartUtil, "GlideChartValue": GlideChartValue, "GlideChecksum": GlideChecksum, "GlideChoice": GlideChoice, "GlideChoiceList": GlideChoiceList,
    "GlideChoiceListGenerator": GlideChoiceListGenerator,  "GlideChoiceListSet": GlideChoiceListSet, "GlideChoiceListUpdateSaver": GlideChoiceListUpdateSaver, "GlideClientBrowserTimes": GlideClientBrowserTimes,
    "GlideClientNetworkTimes": GlideClientNetworkTimes,  "GlideClusterMessage": GlideClusterMessage, "GlideClusterSynchronizer": GlideClusterSynchronizer, "GlideCMSLinkHelper": GlideCMSLinkHelper, "GlideCMSPageLink": GlideCMSPageLink,
    "GlideCollectionEnumerator": GlideCollectionEnumerator,  "GlideCollectionQueryCalculator": GlideCollectionQueryCalculator, "GlideCollisionDetector": GlideCollisionDetector, "GlideColumnAttributes": GlideColumnAttributes,
    "GlideCompanyResolver": GlideCompanyResolver,  "GlideCompiler": GlideCompiler, "GlideCompositeElement": GlideCompositeElement, "GlideConfiguration": GlideConfiguration, "GlideContentConfig": GlideContentConfig,
    "GlideContentPage": GlideContentPage,  "GlideContentSite": GlideContentSite, "GlideContentType": GlideContentType, "GlideContextMenu": GlideContextMenu, "GlideContextMenuItem": GlideContextMenuItem,
    "GlideContextualSecurityManager": GlideContextualSecurityManager,  "GlideController": GlideController, "GlideConverter": GlideConverter, "GlideCookieMan": GlideCookieMan, "GlideCounter": GlideCounter, "GlideCredentials": GlideCredentials,
    "GlideCryptoService": GlideCryptoService,  "GlideCSVExporter": GlideCSVExporter, "GlideCustomerScriptFixer": GlideCustomerScriptFixer, "GlideDatabaseVerifier": GlideDatabaseVerifier, "GlideDatabaseViewLink": GlideDatabaseViewLink,
    "GlideDataSource": GlideDataSource,  "GlideDate": GlideDate, "GlideDateTime": GlideDateTime, "GlideDateUtil": GlideDateUtil, "GlideDBAction": GlideDBAction, "GlideDBAggregateQuery": GlideDBAggregateQuery,
    "GlideDBAggregateUtil": GlideDBAggregateUtil,  "GlideDBCategoryDebug": GlideDBCategoryDebug, "GlideDBChangeManager": GlideDBChangeManager, "GlideDBCompositeAction": GlideDBCompositeAction, "GlideDBConfiguration": GlideDBConfiguration,
    "GlideDBConfigurationManager": GlideDBConfigurationManager,  "GlideDBConfigurationManagerEventHandler": GlideDBConfigurationManagerEventHandler, "GlideDBConfigurationParms": GlideDBConfigurationParms,
    "GlideDBConfigurationV2Migrator": GlideDBConfigurationV2Migrator,  "GlideDBConnection": GlideDBConnection, "GlideDBConnectionPool": GlideDBConnectionPool, "GlideDBConnectionPooler": GlideDBConnectionPooler, "GlideDBDelete": GlideDBDelete,
    "GlideDBI": GlideDBI,  "GlideDBImageProvider": GlideDBImageProvider, "GlideDBIMySQL": GlideDBIMySQL, "GlideDBIndex": GlideDBIndex, "GlideDBKeyStoreFactory": GlideDBKeyStoreFactory, "GlideDBMacro": GlideDBMacro,
    "GlideDBMicroStats": GlideDBMicroStats,  "GlideDBMultiTargetAction": GlideDBMultiTargetAction, "GlideDBObjectManager": GlideDBObjectManager, "GlideDBObjectToken": GlideDBObjectToken, "GlideDBPoolTest": GlideDBPoolTest,
    "GlideDBPropertiesConfig": GlideDBPropertiesConfig,  "GlideDBQuery": GlideDBQuery, "GlideDBTypes": GlideDBTypes, "GlideDBUpdate": GlideDBUpdate, "GlideDBUtil": GlideDBUtil, "GlideDBView": GlideDBView,
    "GlideDebugEvaluator": GlideDebugEvaluator,  "GlideDefaultUpdateSaver": GlideDefaultUpdateSaver, "GlideDiagram": GlideDiagram, "GlideDiagramAction": GlideDiagramAction, "GlideDiagramEdge": GlideDiagramEdge,
    "GlideDiagramElement": GlideDiagramElement,  "GlideDiagramNode": GlideDiagramNode, "GlideDistUpgradeRunner": GlideDistUpgradeRunner, "GlideDocument": GlideDocument, "GlideDomain": GlideDomain, "GlideDomainDisplay": GlideDomainDisplay,
    "GlideDomainHierarchy": GlideDomainHierarchy,  "GlideDomainNumberProvider": GlideDomainNumberProvider, "GlideDomainPathDisplay": GlideDomainPathDisplay, "GlideDomainPathProvider": GlideDomainPathProvider,
    "GlideDomainSpoolProvider": GlideDomainSpoolProvider,  "GlideDomainSupport": GlideDomainSupport, "GlideDomainTree": GlideDomainTree, "GlideDomainUtil": GlideDomainUtil, "GlideDomainValidator": GlideDomainValidator,
    "GlideDuration": GlideDuration,  "GlideECBDownloader": GlideECBDownloader, "GlideECCQueueTransformer": GlideECCQueueTransformer, "GlideElement": GlideElement, "GlideElementAudio": GlideElementAudio,
    "GlideElementBoolean": GlideElementBoolean,  "GlideElementBreakdownElement": GlideElementBreakdownElement, "GlideElementCompressed": GlideElementCompressed, "GlideElementConditions": GlideElementConditions,
    "GlideElementCounter": GlideElementCounter,  "GlideElementCurrency": GlideElementCurrency, "GlideElementDataArray": GlideElementDataArray, "GlideElementDataObject": GlideElementDataObject,
    "GlideElementDataStructure": GlideElementDataStructure,  "GlideElementDescriptor": GlideElementDescriptor, "GlideElementDocumentation": GlideElementDocumentation, "GlideElementDocumentId": GlideElementDocumentId,
    "GlideElementDomainId": GlideElementDomainId,  "GlideElementEncrypted": GlideElementEncrypted, "GlideElementFileAttachment": GlideElementFileAttachment, "GlideElementFullUTF8": GlideElementFullUTF8,
    "GlideElementGlideObject": GlideElementGlideObject,  "GlideElementGlideVar": GlideElementGlideVar, "GlideElementIcon": GlideElementIcon, "GlideElementInternalType": GlideElementInternalType, "GlideElementIterator": GlideElementIterator,
    "GlideElementNameValue": GlideElementNameValue,  "GlideElementNumeric": GlideElementNumeric, "GlideElementPassword": GlideElementPassword, "GlideElementPassword2": GlideElementPassword2, "GlideElementPhoneNumber": GlideElementPhoneNumber,
    "GlideElementPrice": GlideElementPrice,  "GlideElementReference": GlideElementReference, "GlideElementRelatedTags": GlideElementRelatedTags, "GlideElementReplicationPayload": GlideElementReplicationPayload,
    "GlideElementScript": GlideElementScript,  "GlideElementShortFieldName": GlideElementShortFieldName, "GlideElementShortTableName": GlideElementShortTableName, "GlideElementSourceId": GlideElementSourceId,
    "GlideElementSourceName": GlideElementSourceName,  "GlideElementSourceTable": GlideElementSourceTable, "GlideElementSysClassName": GlideElementSysClassName, "GlideElementTranslatedField": GlideElementTranslatedField,
    "GlideElementTranslatedHTML": GlideElementTranslatedHTML,  "GlideElementTranslatedText": GlideElementTranslatedText, "GlideElementURL": GlideElementURL, "GlideElementUserImage": GlideElementUserImage,
    "GlideElementVariable": GlideElementVariable,  "GlideElementVariableConditions": GlideElementVariableConditions, "GlideElementVariables": GlideElementVariables, "GlideElementWikiText": GlideElementWikiText,
    "GlideElementWorkflow": GlideElementWorkflow,  "GlideElementWorkflowConditions": GlideElementWorkflowConditions, "GlideElementXMLSerializer": GlideElementXMLSerializer, "GlideEmail": GlideEmail, "GlideEmailAction": GlideEmailAction,
    "GlideEmailFormatter": GlideEmailFormatter,  "GlideEmailInbound": GlideEmailInbound, "GlideEmailOutbound": GlideEmailOutbound, "GlideEmailReader": GlideEmailReader, "GlideEmailSender": GlideEmailSender,
    "GlideEmailWatermark": GlideEmailWatermark,  "GlideEmitter": GlideEmitter, "GlideEncrypter": GlideEncrypter, "GlideEncryptionContext": GlideEncryptionContext, "GlideEncryptionContextCipher": GlideEncryptionContextCipher,
    "GlideEncryptionWrapperDB": GlideEncryptionWrapperDB,  "GlideEncryptionWrapperDBAdmin": GlideEncryptionWrapperDBAdmin, "GlideEncryptionWrapperNAE": GlideEncryptionWrapperNAE,
    "GlideEncryptionWrapperNAEAdmin": GlideEncryptionWrapperNAEAdmin,  "GlideEscalationManager": GlideEscalationManager, "GlideEscalationTimerJobMarkII": GlideEscalationTimerJobMarkII, "GlideEvaluator": GlideEvaluator,
    "GlideEvent": GlideEvent,  "GlideEventManager": GlideEventManager, "GlideExcelExporter": GlideExcelExporter, "GlideExcelLoader2": GlideExcelLoader2, "GlideExecutionPlan": GlideExecutionPlan,
    "GlideExpressionWrapper": GlideExpressionWrapper,  "GlideExtensionPoint": GlideExtensionPoint, "GlideFieldList": GlideFieldList, "GlideFile": GlideFile, "GlideFileUtil": GlideFileUtil, "GlideFilter": GlideFilter,
    "GlideFilterList": GlideFilterList,  "GlideFixCatalogPlans": GlideFixCatalogPlans, "GlideFixDeliveryPlans": GlideFixDeliveryPlans, "GlideFixGroups": GlideFixGroups, "GlideFixItemOptionsAgain": GlideFixItemOptionsAgain,
    "GlideFixRules": GlideFixRules,  "GlideFixSpellCheck": GlideFixSpellCheck, "GlideFixStuff": GlideFixStuff, "GlideFixUsers": GlideFixUsers, "GlideForm": GlideForm, "GlideFormCommon": GlideFormCommon, "GlideFormulator": GlideFormulator,
    "GlideGauge": GlideGauge,  "GlideGovernor": GlideGovernor, "GlideGregorianCalendar": GlideGregorianCalendar, "GlideGroup": GlideGroup, "GlideGroupByListTag": GlideGroupByListTag, "GlideGuid": GlideGuid,
    "GlideHierarchicalReference": GlideHierarchicalReference,  "GlideHistorySet": GlideHistorySet, "GlideHistoryTag2": GlideHistoryTag2, "GlideHostUtil": GlideHostUtil, "GlideHTTPClient": GlideHTTPClient, "GlideHTTPRequest": GlideHTTPRequest,
    "GlideHTTPResponse": GlideHTTPResponse,  "GlideI18NStyle": GlideI18NStyle, "GlideICALUtil": GlideICALUtil, "GlideIConstants": GlideIConstants, "GlideIGlideRecord": GlideIGlideRecord, "GlideImageLoader": GlideImageLoader,
    "GlideImpersonate": GlideImpersonate,  "GlideImportLog": GlideImportLog, "GlideImportMap": GlideImportMap, "GlideImportMapField": GlideImportMapField, "GlideImportSet": GlideImportSet, "GlideImportSetLoader": GlideImportSetLoader,
    "GlideImportSetRun": GlideImportSetRun,  "GlideImportSetTransformer": GlideImportSetTransformer, "GlideImportSetTransformerWorker": GlideImportSetTransformerWorker, "GlideIndexDescriptor": GlideIndexDescriptor,
    "GlideIndexUtils": GlideIndexUtils,  "GlideIntegerTime": GlideIntegerTime, "GlideInternalElementTypeChoiceList": GlideInternalElementTypeChoiceList, "GlideInternalMonitor": GlideInternalMonitor, "GlideIOStats": GlideIOStats,
    "GlideIPAddressUtil": GlideIPAddressUtil,  "GlideIQueryCondition": GlideIQueryCondition, "GlideIRow": GlideIRow, "GlideIRQuerySummary": GlideIRQuerySummary, "GlideIRQuerySummarySimple": GlideIRQuerySummarySimple,
    "GlideISecurityManager": GlideISecurityManager,  "GlideITableIterator": GlideITableIterator, "GlideJDBCLoader": GlideJDBCLoader, "GlideJDBCProbeTestWorker": GlideJDBCProbeTestWorker, "GlideJellyContext": GlideJellyContext,
    "GlideJellyRunner": GlideJellyRunner,  "GlideJID": GlideJID, "GlideJSUtil": GlideJSUtil, "GlideLabelEventHandler": GlideLabelEventHandler, "GlideLabelGenerator": GlideLabelGenerator, "GlideLabelUtil": GlideLabelUtil,
    "GlideLDAP": GlideLDAP,  "GlideLDAPConfig": GlideLDAPConfig, "GlideLDAPConfigurations": GlideLDAPConfigurations, "GlideLDAPErrorAnalyzer": GlideLDAPErrorAnalyzer, "GlideLDAPGroups": GlideLDAPGroups, "GlideLDAPRefresh": GlideLDAPRefresh,
    "GlideLDAPResult": GlideLDAPResult,  "GlideLDAPTarget": GlideLDAPTarget, "GlideLDAPTransformQueue": GlideLDAPTransformQueue, "GlideLDAPUsers": GlideLDAPUsers, "GlideLDAPUserUpdate": GlideLDAPUserUpdate, "GlideList": GlideList,
    "GlideListGroupProperties": GlideListGroupProperties,  "GlideListLabel": GlideListLabel, "GlideListM2MBacking": GlideListM2MBacking, "GlideListProperties": GlideListProperties, "GlideListSearchQuery": GlideListSearchQuery,
    "GlideLoader": GlideLoader,  "GlideLoadTestDirector": GlideLoadTestDirector, "GlideLocale": GlideLocale, "GlideLocaleLoader": GlideLocaleLoader, "GlideLock": GlideLock, "GlideLog": GlideLog, "GlideLogCleanup": GlideLogCleanup,
    "GlideLogFileReader": GlideLogFileReader,  "GlideLRUCache": GlideLRUCache, "GlideLuceneTextIndexEvent": GlideLuceneTextIndexEvent, "GlideMarkupWriter": GlideMarkupWriter, "GlideMemoryActive": GlideMemoryActive,
    "GlideMemoryCache": GlideMemoryCache,  "GlideMemoryRecord": GlideMemoryRecord, "GlideMemorySwap": GlideMemorySwap, "GlideMemoryTable": GlideMemoryTable, "GlideMemoryTotal": GlideMemoryTotal, "GlideMetaData": GlideMetaData,
    "GlideMIDServerInfoAccessor": GlideMIDServerInfoAccessor,  "GlideMobileExtensions": GlideMobileExtensions, "GlideModule": GlideModule, "GlideMultipleAction": GlideMultipleAction, "GlideMultipleDelete": GlideMultipleDelete,
    "GlideMultipleInsert": GlideMultipleInsert,  "GlideMultipleUpdate": GlideMultipleUpdate, "GlideMutex": GlideMutex, "GlideMySQLWatch": GlideMySQLWatch, "GlideNumber": GlideNumber, "GlideNumberManager": GlideNumberManager,
    "GlideObjectManager": GlideObjectManager,  "GlideObjectUtil": GlideObjectUtil, "GlideOrderingDefinitionCreator": GlideOrderingDefinitionCreator, "GlideOrderingManager": GlideOrderingManager, "GlideOutputWriter": GlideOutputWriter,
    "GlideOutputWriterFactory": GlideOutputWriterFactory,  "GlideOverLoadedChoices": GlideOverLoadedChoices, "GlidePivotTableSummaryTableWriter": GlidePivotTableSummaryTableWriter, "GlidePlugin": GlidePlugin,
    "GlidePluginManager": GlidePluginManager,  "GlidePluginManagerWorker": GlidePluginManagerWorker, "GlidePluginUtils": GlidePluginUtils, "GlidePOP3Reader": GlidePOP3Reader, "GlidePOP3ReaderJob": GlidePOP3ReaderJob, "GlidePopup": GlidePopup,
    "GlidePriceGenerator": GlidePriceGenerator,  "GlidePriceLoader": GlidePriceLoader, "GlideProcessor": GlideProcessor, "GlideProgressMonitor": GlideProgressMonitor, "GlideProgressWorker": GlideProgressWorker,
    "GlideProperties": GlideProperties,  "GlidePropertiesDB": GlidePropertiesDB, "GlideProperty": GlideProperty, "GlidePublicPage": GlidePublicPage, "GlideQueryBreadcrumbs": GlideQueryBreadcrumbs, "GlideQueryCondition": GlideQueryCondition,
    "GlideQueryFormatter": GlideQueryFormatter,  "GlideQueryString": GlideQueryString, "GlideQueryTerm": GlideQueryTerm, "GlideRecord": GlideRecord, "GlideRecordCache": GlideRecordCache, "GlideRecordEnsurer": GlideRecordEnsurer,
    "GlideRecordFactory": GlideRecordFactory,  "GlideRecordKeySetLoader": GlideRecordKeySetLoader, "GlideRecordLock": GlideRecordLock, "GlideRecordPopupGenerator": GlideRecordPopupGenerator, "GlideRecordRollback": GlideRecordRollback,
    "GlideRecordSet": GlideRecordSet,  "GlideRecordSimpleSerializer": GlideRecordSimpleSerializer, "GlideRecordXMLSerializer": GlideRecordXMLSerializer, "GlideReferenceField": GlideReferenceField, "GlideRegexUtil": GlideRegexUtil,
    "GlideRegisterEscalationEvents": GlideRegisterEscalationEvents,  "GlideRelatedListReconciler": GlideRelatedListReconciler, "GlideRelationship": GlideRelationship, "GlideRelationships": GlideRelationships,
    "GlideRelationshipUtil": GlideRelationshipUtil,  "GlideRemoteGlideRecord": GlideRemoteGlideRecord, "GlideRenderProperties": GlideRenderProperties, "GlideReplaceUpdateFiles": GlideReplaceUpdateFiles,
    "GlideReplicationEngine": GlideReplicationEngine,  "GlideReport": GlideReport, "GlideReportChoiceList": GlideReportChoiceList, "GlideReportViewManagement": GlideReportViewManagement, "GlideRequestMap": GlideRequestMap,
    "GlideRevertToOutOfBox": GlideRevertToOutOfBox,  "GlideRhinoEnvironment": GlideRhinoEnvironment, "GlideRhinoHelper": GlideRhinoHelper, "GlideRhinoScopeHandler": GlideRhinoScopeHandler, "GlideRRDBAlertProcessor": GlideRRDBAlertProcessor,
    "GlideRRDBDefinition": GlideRRDBDefinition,  "GlideRunScriptJob": GlideRunScriptJob, "GlideSchedule": GlideSchedule, "GlideScheduleDateTime": GlideScheduleDateTime, "GlideScheduleDateTimeSpan": GlideScheduleDateTimeSpan,
    "GlideScheduleItem": GlideScheduleItem,  "GlideScheduler": GlideScheduler, "GlideScheduleTimeMap": GlideScheduleTimeMap, "GlideScheduleTimeSpan": GlideScheduleTimeSpan, "GlideScriptChoiceList": GlideScriptChoiceList,
    "GlideScriptedProgressWorker": GlideScriptedProgressWorker,  "GlideScriptEvaluator": GlideScriptEvaluator, "GlideScriptGlobals": GlideScriptGlobals, "GlideScriptListener": GlideScriptListener, "GlideScriptProcessor": GlideScriptProcessor,
    "GlideScriptRecordUtil": GlideScriptRecordUtil,  "GlideScriptSystemUtilDB": GlideScriptSystemUtilDB, "GlideScriptViewManager": GlideScriptViewManager, "GlideScriptWriter": GlideScriptWriter,
    "GlideSearchQueryFormatter": GlideSearchQueryFormatter,  "GlideSecondaryDatabaseBehindnessChecker": GlideSecondaryDatabaseBehindnessChecker, "GlideSecondaryDatabaseConfiguration": GlideSecondaryDatabaseConfiguration,
    "GlideSecurityManager": GlideSecurityManager,  "GlideSecurityQueryCalculator": GlideSecurityQueryCalculator, "GlideSecurityUtils": GlideSecurityUtils, "GlideSelfCleaningMutex": GlideSelfCleaningMutex,
    "GlideServiceAPIWrapper": GlideServiceAPIWrapper,  "GlideServlet": GlideServlet, "GlideServletRequest": GlideServletRequest, "GlideServletResponse": GlideServletResponse, "GlideServletStatus": GlideServletStatus,
    "GlideSession": GlideSession,  "GlideSessionDebug": GlideSessionDebug, "GlideSessions": GlideSessions, "GlideSessionSandbox": GlideSessionSandbox, "GlideSimmerDown": GlideSimmerDown, "GlideSimmerUp": GlideSimmerUp,
    "GlideSimpleDateFormatEx": GlideSimpleDateFormatEx,  "GlideSimpleHTTPClient": GlideSimpleHTTPClient, "GlideSimpleScriptListener": GlideSimpleScriptListener, "GlideSMTPConnection": GlideSMTPConnection, "GlideSMTPSender": GlideSMTPSender,
    "GlideSMTPSenderJob": GlideSMTPSenderJob,  "GlideSOAPDocument": GlideSOAPDocument, "GlideSOAPRequest": GlideSOAPRequest, "GlideSOAPResponse": GlideSOAPResponse, "GlideSOAPSecurity": GlideSOAPSecurity, "GlideSOAPSigner": GlideSOAPSigner,
    "GlideSocket": GlideSocket,  "GlidesoftGlideAttributesImpl": GlidesoftGlideAttributesImpl, "GlidesoftXMLMemoryTable": GlidesoftXMLMemoryTable, "GlideSQLDebug": GlideSQLDebug, "GlideSSHClient": GlideSSHClient, "GlideStack": GlideStack,
    "GlideStatistician": GlideStatistician,  "GlideStatsInfo": GlideStatsInfo, "GlideStatus": GlideStatus, "GlideStopWatch": GlideStopWatch, "GlideStorageUtils": GlideStorageUtils, "GlideStringCache": GlideStringCache,
    "GlideStringInputStream": GlideStringInputStream,  "GlideStringList": GlideStringList, "GlideStringUtil": GlideStringUtil, "GlideSubQuery": GlideSubQuery, "GlideSubstituteURL": GlideSubstituteURL,
    "GlideSummaryTableGroupReader": GlideSummaryTableGroupReader,  "GlideSummaryTableOrderedReader": GlideSummaryTableOrderedReader, "GlideSummaryTableReader": GlideSummaryTableReader, "GlideSummaryTableWriter": GlideSummaryTableWriter,
    "GlideSynchronizedLRUCache": GlideSynchronizedLRUCache,  "GlideSysAttachment": GlideSysAttachment, "GlideSysAttachmentInputStream": GlideSysAttachmentInputStream, "GlideSysBRThreadMonitor": GlideSysBRThreadMonitor,
    "GlideSysChoice": GlideSysChoice,  "GlideSysConcurrencyMonitor": GlideSysConcurrencyMonitor, "GlideSysCPUThreadMonitor": GlideSysCPUThreadMonitor, "GlideSysDateUtil": GlideSysDateUtil, "GlideSysDBThreadMonitor": GlideSysDBThreadMonitor,
    "GlideSysField": GlideSysField,  "GlideSysFileUtil": GlideSysFileUtil, "GlideSysForm": GlideSysForm, "GlideSysForms": GlideSysForms, "GlideSysList": GlideSysList, "GlideSysListControl": GlideSysListControl, "GlideSysLog": GlideSysLog,
    "GlideSYSMany2Many": GlideSYSMany2Many,  "GlideSysMessage": GlideSysMessage, "GlideSysNetThreadMonitor": GlideSysNetThreadMonitor, "GlideSysRelatedList": GlideSysRelatedList, "GlideSysSection": GlideSysSection,
    "GlideSysSemaphore": GlideSysSemaphore,  "GlideSystem": GlideSystem, "GlideSystemDateUtil": GlideSystemDateUtil, "GlideSystemUtil": GlideSystemUtil, "GlideSystemUtilDB": GlideSystemUtilDB, "GlideSystemUtilScript": GlideSystemUtilScript,
    "GlideSysThreadMonitor": GlideSysThreadMonitor,  "GlideSysUserList": GlideSysUserList, "GlideTable": GlideTable, "GlideTableChoiceList": GlideTableChoiceList, "GlideTableCleaner": GlideTableCleaner,
    "GlideTableCleanerJob": GlideTableCleanerJob,  "GlideTableCreator": GlideTableCreator, "GlideTableDescriptor": GlideTableDescriptor, "GlideTableGroupMover": GlideTableGroupMover, "GlideTableManager": GlideTableManager,
    "GlideTableMover": GlideTableMover,  "GlideTableParentChange": GlideTableParentChange, "GlideTableParentColumnChange": GlideTableParentColumnChange, "GlideTaskToken": GlideTaskToken, "GlideTemplate": GlideTemplate,
    "GlideTextIndexEvent": GlideTextIndexEvent,  "GlideThreadAttributes": GlideThreadAttributes, "GlideThreadUtil": GlideThreadUtil, "GlideTime": GlideTime, "GlideTimelineFrameSeparator": GlideTimelineFrameSeparator,
    "GlideTimelineItem": GlideTimelineItem,  "GlideTimelineSpan": GlideTimelineSpan, "GlideTransaction": GlideTransaction, "GlideTransactionManager": GlideTransactionManager, "GlideTransferAuditDataHelper": GlideTransferAuditDataHelper,
    "GlideTransformer": GlideTransformer,  "GlideTreePicker": GlideTreePicker, "GlideTSAnalysisViewer": GlideTSAnalysisViewer, "GlideTSAnalyticsProcessor": GlideTSAnalyticsProcessor, "GlideTSChainsHandler": GlideTSChainsHandler,
    "GlideTSChainsLoader": GlideTSChainsLoader,  "GlideTSChainsPusher": GlideTSChainsPusher, "GlideTSChainsSummarizer": GlideTSChainsSummarizer, "GlideTSClusterDefinitions": GlideTSClusterDefinitions, "GlideTSDebug": GlideTSDebug,
    "GlideTSDidYouMean": GlideTSDidYouMean,  "GlideTSGlobalKeywordSummarizer": GlideTSGlobalKeywordSummarizer, "GlideTSIndexStatistician": GlideTSIndexStatistician, "GlideTSIndexStopGenerator": GlideTSIndexStopGenerator,
    "GlideTSIndexTables": GlideTSIndexTables,  "GlideTSKeywordHandler": GlideTSKeywordHandler, "GlideTSKeywordLoader": GlideTSKeywordLoader, "GlideTSKeywordPusher": GlideTSKeywordPusher, "GlideTSMoversViewer": GlideTSMoversViewer,
    "GlideTSSearchStatistician": GlideTSSearchStatistician,  "GlideTSSearchSummary": GlideTSSearchSummary, "GlideTSTopSearches": GlideTSTopSearches, "GlideTSUtil": GlideTSUtil, "GlideTSVersion": GlideTSVersion, "GlideUIAction": GlideUIAction,
    "GlideUISession": GlideUISession,  "GlideUnloader": GlideUnloader, "GlideUpdateManager2": GlideUpdateManager2, "GlideUpdateSet": GlideUpdateSet, "GlideUpdateSetController": GlideUpdateSetController,
    "GlideUpdateSetPreviewer": GlideUpdateSetPreviewer,  "GlideUpdateSetWorker": GlideUpdateSetWorker, "GlideUpdateSyncher": GlideUpdateSyncher, "GlideUpdateTableChoiceList": GlideUpdateTableChoiceList, "GlideUpgrade": GlideUpgrade,
    "GlideUpgradeArtifactManager": GlideUpgradeArtifactManager,  "GlideUpgradeLog": GlideUpgradeLog, "GlideUpgradeMonitor": GlideUpgradeMonitor, "GlideURI": GlideURI, "GlideURL": GlideURL, "GlideURLUTF8Encoder": GlideURLUTF8Encoder,
    "GlideURLUtil": GlideURLUtil,  "GlideUser": GlideUser, "GlideUserAuthenticator": GlideUserAuthenticator, "GlideUserGroup": GlideUserGroup, "GlideUtil": GlideUtil, "GlideViewRuleNavigator": GlideViewRuleNavigator,
    "GlideWarDeleter": GlideWarDeleter,  "GlideWarDownloader": GlideWarDownloader, "GlideWhiteListManager": GlideWhiteListManager, "GlideWikiModel": GlideWikiModel, "GlideWorkerThread": GlideWorkerThread,
    "GlideWorkerThreadManager": GlideWorkerThreadManager,  "GlideWSClient": GlideWSClient, "GlideWSDefinition": GlideWSDefinition, "GlideWSDLReader": GlideWSDLReader, "GlideXMLChoiceListSerializer": GlideXMLChoiceListSerializer,
    "GlideXMLDocument": GlideXMLDocument,  "GlideXMLElementIterator": GlideXMLElementIterator, "GlideXMLGlideRecordSerializer": GlideXMLGlideRecordSerializer, "GlideXMLParameters": GlideXMLParameters, "GlideXMLStats": GlideXMLStats,
    "GlideXMLSysMetaSerializer": GlideXMLSysMetaSerializer,  "GlideXMLUtil": GlideXMLUtil, "GlideZipUtil": GlideZipUtil, "Packages.java.lang.Boolean": Packages.java.lang.Boolean, "Packages.java.lang.Byte": Packages.java.lang.Byte, "Packages.java.lang.Character": Packages.java.lang.Character,
    "Packages.java.lang.Double": Packages.java.lang.Double,  "Packages.java.lang.Float": Packages.java.lang.Float, "Packages.java.lang.Integer": Packages.java.lang.Integer, "Packages.java.lang.Long": Packages.java.lang.Long, "Packages.java.lang.Object": Packages.java.lang.Object, "Packages.java.lang.Short": Packages.java.lang.Short,
    "Packages.java.lang.String": Packages.java.lang.String,  "Packages.java.lang.StringBuffer": Packages.java.lang.StringBuffer, "Packages.java.util.List": Packages.java.util.List, "Packages.java.util.Map": Packages.java.util.Map, "Packages.java.util.Set": Packages.java.util.Set, "Packages.java.util.TimeZone": Packages.java.util.TimeZone, "Number": Number, "RhinoEnvironment": RhinoEnvironment,
    "RhinoHelper": RhinoHelper,  "ScheduleDateTime": ScheduleDateTime, "SecurelyAccess": SecurelyAccess, "ServiceAPI": ServiceAPI, "SncAddress32Bit": SncAddress32Bit, "SncAliasApplier": SncAliasApplier, "SncAppFiles": SncAppFiles,
    "SncApplicationFileListener": SncApplicationFileListener,  "SncAppsAccess": SncAppsAccess, "SncAppsUI": SncAppsUI, "SncAuthentication": SncAuthentication, "SncBaselineCMDB": SncBaselineCMDB, "SncBulkCopy": SncBulkCopy,
    "SncClassifiedProcess": SncClassifiedProcess,  "SncClassify": SncClassify, "SncCloneController": SncCloneController, "SncCloneInstance": SncCloneInstance, "SncCloneLogger": SncCloneLogger, "SncCloneTask": SncCloneTask,
    "SncCloneUtils": SncCloneUtils,  "SncConfiguration": SncConfiguration, "SncConfigurations": SncConfigurations, "SncConnectionTest": SncConnectionTest, "SncDBChangeManagerFactoryHA": SncDBChangeManagerFactoryHA,
    "SncDeviceHistory": SncDeviceHistory,  "SncDiscoveryCancel": SncDiscoveryCancel, "SncDiscoveryClassification": SncDiscoveryClassification, "SncDiscoveryLog": SncDiscoveryLog, "SncDiscoveryRanges": SncDiscoveryRanges,
    "SncDiscoveryRangesDB": SncDiscoveryRangesDB,  "SncDiscoveryReconciler": SncDiscoveryReconciler, "SncDiscoverySNMPClassification": SncDiscoverySNMPClassification, "SncDiscoveryUtils": SncDiscoveryUtils,
    "SncDropBackupTablesTask": SncDropBackupTablesTask,  "SncDropTablesTask": SncDropTablesTask, "SncEC2Properties": SncEC2Properties, "SncECMDBUtil": SncECMDBUtil, "SncElrondClient": SncElrondClient, "SncExpert": SncExpert,
    "SncExpertInstance": SncExpertInstance,  "SncExpertPanel": SncExpertPanel, "SncExtantDataJob": SncExtantDataJob, "SncExtantDataJobState": SncExtantDataJobState, "SncFailoverController": SncFailoverController, "SncFileTree": SncFileTree,
    "SncGatewayCache": SncGatewayCache,  "SncGatewayClone": SncGatewayClone, "SncGatewayPluginStartup": SncGatewayPluginStartup, "SncGatewayTruncateHierarchy": SncGatewayTruncateHierarchy, "SncHAClone": SncHAClone,
    "SncHAConnectionTest": SncHAConnectionTest,  "SncHADatabaseCheck": SncHADatabaseCheck, "SncHAPairingUtils": SncHAPairingUtils, "SncHAReplicationController": SncHAReplicationController,
    "SncHAReplicationQueueSnapshotBuilder": SncHAReplicationQueueSnapshotBuilder,  "SncHATableCheck": SncHATableCheck, "SncHATableCheckThread": SncHATableCheckThread, "SncHATableQuickCheck": SncHATableQuickCheck,
    "SncHATableRepair": SncHATableRepair,  "SncHAUtils": SncHAUtils, "SncHostname": SncHostname, "SncInstanceClone": SncInstanceClone, "SncInstanceConnectionTest": SncInstanceConnectionTest, "SncInstanceRollback": SncInstanceRollback,
    "SncIPAddressV4": SncIPAddressV4,  "SncIPAddressV6": SncIPAddressV6, "SncIPAuthenticator": SncIPAuthenticator, "SncIPIterator": SncIPIterator, "SncIPList": SncIPList, "SncIPMetaCollection": SncIPMetaCollection,
    "SncIPNetmaskV4": SncIPNetmaskV4,  "SncIPNetworkV4": SncIPNetworkV4, "SncIPRangeV4": SncIPRangeV4, "SncLayer7Connections": SncLayer7Connections, "SncMACAddress": SncMACAddress, "SncMACAddressMfr": SncMACAddressMfr,
    "SncMakeAndModel": SncMakeAndModel,  "SncMIDConfigParameter": SncMIDConfigParameter, "SncMIDServerRangesDB": SncMIDServerRangesDB, "SncNormalCoalescer": SncNormalCoalescer, "SncNormalizer": SncNormalizer,
    "SncNormalValueChanger": SncNormalValueChanger,  "SncNotifySNC": SncNotifySNC, "SncPendingValueCollector": SncPendingValueCollector, "SncPreferences": SncPreferences, "SncPrintServerHelper": SncPrintServerHelper, "SncProbe": SncProbe,
    "SncProbeRunTime": SncProbeRunTime,  "SncRBSensorProcessor": SncRBSensorProcessor, "SncReadTest": SncReadTest, "SncReclassifyCI": SncReclassifyCI, "SncRelationships": SncRelationships, "SncReplicationAdvisor": SncReplicationAdvisor,
    "SncReplicationEngine": SncReplicationEngine,  "SncReplicationQueue": SncReplicationQueue, "SncRequestCredentials": SncRequestCredentials, "SncRuleApplier": SncRuleApplier, "SncRuleToPending": SncRuleToPending,
    "SncSAMCounter": SncSAMCounter,  "SncScheduleDropBackupTablesTask": SncScheduleDropBackupTablesTask, "SncScrapeIANAEnterpriseNumbers": SncScrapeIANAEnterpriseNumbers, "SncScrapeIEEENICCodes": SncScrapeIEEENICCodes,
    "SncSendNotificationTask": SncSendNotificationTask,  "SncSensorProcessor": SncSensorProcessor, "SncSerialNumber": SncSerialNumber, "SncSerialNumberList": SncSerialNumberList, "SncSessionMate": SncSessionMate,
    "SncSimmerControl": SncSimmerControl,  "SncTableEditor": SncTableEditor, "SncTableRotation": SncTableRotation, "SncTableRotationExtension": SncTableRotationExtension, "SncTableRotationExtensions": SncTableRotationExtensions,
    "SncTableRotationWatcher": SncTableRotationWatcher,  "SncTransformApplier": SncTransformApplier, "SncTreeBuilder": SncTreeBuilder, "SncTriggerSynchronizer": SncTriggerSynchronizer, "SncValue": SncValue, "String": String,
    "TestExtension": TestExtension,  "UINotification": UINotification
};
var typeNames = [
    "com.glide.autotester.GlideTestAgent", "com.glide.autotester.JSTestUtil", "com.glide.autotester.RhinoTestCase", "com.glide.cluster.ClusterState", "com.glide.glideobject.DayOfWeek", "com.glide.glideobject.GlideActionList",
    "com.glide.glideobject.GlideDueDate",  "com.glide.glideobject.GlideHTML", "com.glide.glideobject.GlideUserInput", "com.glide.glideobject.Journal", "com.glide.glideobject.MonthOfYear", "com.glide.glideobject.SysClassName",
    "com.glide.glideobject.Translated",  "com.glide.glideobject.WeekOfMonth", "com.glide.monitor.sql.SQLChildMonitor", "com.glide.monitor.sql.SQLDeleteMonitor", "com.glide.monitor.sql.SQLInsertMonitor",
    "com.glide.monitor.sql.SQLResponseMonitor",  "com.glide.monitor.sql.SQLSelectMonitor", "com.glide.monitor.sql.SQLUpdateMonitor", "com.glide.script.glide_elements.GlideElementDocumentId",
    "com.glide.script.glide_elements.GlideElementDomainId",  "com.glide.script.glide_elements.GlideElementInternalType", "com.glide.script.glide_elements.GlideElementPhoneNumber", "com.glide.script.glide_elements.GlideElementSourceTable",
    "com.glide.script.RhinoScope",  "com.glide.startup.TomcatHelper", "com.glide.ui.monitor.IOMonitor", "com.glide.ui.monitor.PartitionMonitor", "com.glide.util.ProcessRunner", "com.glide.util.ShellCommand",
    "com.glide.vars.GlideElementGlideVar",  "com.glide.vars.GlideElementHierarchicalVariables", "com.glide.vars.HierarchicalVariables", "com.glide.wiki.GlideElementWikiText", "com.glideapp.workflow.Workflow",
    "com.snc.apps.glide_elements.GlideElementSourceId",  "com.snc.apps.glide_elements.GlideElementSourceName", "com.snc.apps.glide_elements.GlideElementSourceTable", "com.snc.da.gateway.GatewayConnectivity",
    "com.snc.da.gateway.GlideGateways",  "com.snc.datastructure.GlideElementDataArray", "com.snc.datastructure.GlideElementDataObject", "com.snc.datastructure.GlideElementDataStructure", "com.snc.discovery.sensor.ASensor",
    "com.snc.jrobin.JRobinGraphDef",  "com.snc.jrobin.RrdGlideBackendFactory", "com.snc.on_call_rotation.OnCallRotation", "com.snc.pa.dc.GlideElementBreakdownElement", "java.lang.StringBuilder", "java.time.Duration", "java.time.LocalDate",
    "java.time.LocalDateTime",  "java.time.LocalTime", "java.time.MonthDay", "java.time.Year", "java.time.YearMonth", "java.time.ZonedDateTime", "java.time.ZoneId", "org.mozilla.javascript.FunctionObject",
    "org.mozilla.javascript.ScriptableObject"
];
var gr = new GlideRecord('incident');
gr.addQuery('16a7702ddb988c10683b300f7c9619db');
gr.query();
gr.next();
var el = gr.getElement('sys_created_on');
var inherits = [];
for (var n in allConstructors) {
    var t = allConstructors[n];
    if (el instanceof t)
        inherits.push(n);
}
for (var i = 0; i < typeNames; i++) {
    if (GlideJSUtil.isInstanceOf(el, typeNames[i]))
        inherits.push(typeNames[i]);
}
gs.info(el.getXmlValue());
gs.info(inherits.join(" : "));
var o = el.getGlideObject();
inherits = [];
for (var n in allConstructors) {
    var t = allConstructors[n];
    if (o instanceof t)
        inherits.push(n);
}
for (var i = 0; i < typeNames; i++) {
    if (GlideJSUtil.isInstanceOf(o, typeNames[i]))
        inherits.push(typeNames[i]);
}
gs.info(inherits.join(" : "));






var el = new GlideTime(1000000);
gs.info(el instanceof GlideElement);
gs.info(GlideJSUtil.isInstanceOf(el, 'com.glide.glideobject.GlideTime'));
gs.info(GlideRhinoHelper.getNativeFromRhino(el) instanceof GlideElementGlideObject);
#>

<#
[Xml]$XmlDocument = @'
<TypeInfo>
    <Class Name="java.lang.String" ScalarType="string">
        <Class Name="GlideElement" />
    </Class>
    <Class Name="java.lang.Boolean" ScalarType="boolean">
        <Class Name="GlideElementBoolean" />
    </Class>
    <Class Name="GlideElementNumeric" ScalarType="float" />
    <Class Name="GlideElementGlideObject" />
</TypeInfo>
'@;
$SnTypes.Keys | ForEach-Object {
    $key = $_;
    $c = $SnTypes[$key].class_name;
    $g = $SnTypes[$key].glideType;
    if ($null -ne $c) {
        $SnTypes[$key].Remove('class_name') | Out-Null;
        if ($null -ne $g) {
            $SnTypes[$key].Remove('glideType') | Out-Null;
            if ($g -eq $c -or $g.EndsWith(".$c")) {
                $SnTypes[$key].Add('class_name', @($g));
            } else {
                $SnTypes[$key].Add('class_name', @($c, $g));
            }
        } else {
                $SnTypes[$key].Add('class_name', @($c));
        }
    } else {
        if ($null -ne $g) {
            $SnTypes[$key].Remove('glideType') | Out-Null;
            $SnTypes[$key].Add('class_name', @($g));
        }
    }
    $t = $SnTypes[$key].type_name;
    $s = $SnTypes[$key].scalar_type;
    if ([string]::IsNullOrWhiteSpace($t)) {
        switch ($s) {
            'decimal' { $t = 'GlideElementNumeric'; break; }
            'longint' { $t = 'GlideElementNumeric'; break; }
            'integer' { $t = 'GlideElementNumeric'; break; }
            'float' { $t = 'GlideElementNumeric'; break; }
            'date' { $t = 'GlideElementGlideObject'; break; }
            'datetime' { $t = 'GlideElementGlideObject'; break; }
            'time' { $t = 'GlideElementGlideObject'; break; }
            'boolean' { $t = 'GlideElementBoolean'; break; }
            'GUID' { $t = 'GlideElement'; break; }
            'string' { $t = 'GlideElement'; break; }
            default { "Unknown type $s for $key"; $t = 'GlideElement'; break; }
        }
        $SnTypes[$key]['type_name'] = $t;
    }
    
    [System.Xml.XmlElement]$ParentElement = $XmlDocument.DocumentElement.SelectSingleNode("//Class[@Name=`"$t`"]");
    if ($null -ne $ParentElement) {
        if ($SnTypes[$key].ContainsKey('glideType')) {
            $ParentElement = $XmlDocument.DocumentElement.SelectSingleNode("Class[@Name=`"$($SnTypes[$key]['glideType'])`"]");
            if ($null -eq $ParentElement) {
                $ParentElement = $ParentElement.AppendChild($XmlDocument.CreateElement('Class'));
                $ParentElement.Attributes.Append($XmlDocument.CreateAttribute('Name')).Value = $SnTypes[$key]['glideType'];
            }
        }
        if ($SnTypes[$key].ContainsKey('class_name')) {
            $XmlElement = $ParentElement.SelectSingleNode("Type[@Name=`"$($SnTypes[$key]['class_name'])`"]");
            if ($null -eq $XmlElement) {
                $ParentElement = $ParentElement.AppendChild($XmlDocument.CreateElement('Class'));
                $ParentElement.Attributes.Append($XmlDocument.CreateAttribute('Name')).Value = $SnTypes[$key]['class_name'];
            } else {
                $ParentElement = $XmlElement;
            }
        }
    } else {
        $ParentElement = $XmlDocument.DocumentElement;
        if ($SnTypes[$key].ContainsKey('glideType')) {
            $XmlElement = $ParentElement.SelectSingleNode("Class[@Name=`"$($SnTypes[$key]['glideType'])`"]");
            if ($null -eq $XmlElement) {
                $ParentElement = $ParentElement.AppendChild($XmlDocument.CreateElement('Class'));
                $ParentElement.Attributes.Append($XmlDocument.CreateAttribute('Name')).Value = $SnTypes[$key]['glideType'];
            }
        }
        if ($SnTypes[$key].ContainsKey('class_name')) {
            $XmlElement = $ParentElement.SelectSingleNode("Type[@Name=`"$($SnTypes[$key]['class_name'])`"]");
            if ($null -eq $XmlElement) {
                $ParentElement = $ParentElement.AppendChild($XmlDocument.CreateElement('Class'));
                $ParentElement.Attributes.Append($XmlDocument.CreateAttribute('Name')).Value = $SnTypes[$key]['class_name'];
            } else {
                $ParentElement = $XmlElement;
            }
        }
        $XmlElement = $ParentElement.SelectSingleNode("Class[@Name=`"$t`"]");
        if ($null -eq $XmlElement) {
            $ParentElement = $ParentElement.AppendChild($XmlDocument.CreateElement('Class'));
            $ParentElement.Attributes.Append($XmlDocument.CreateAttribute('Name')).Value = $t;
        } else {
            $ParentElement = $XmlElement;
        }
    }
    $XmlElement = $ParentElement.AppendChild($XmlDocument.CreateElement('Type'));
    $XmlElement.Attributes.Append($XmlDocument.CreateAttribute('Name')).Value = $key;
    $XmlElement.Attributes.Append($XmlDocument.CreateAttribute('Label')).Value = $SnTypes[$key]['sys_name'];
    $XmlElement.Attributes.Append($XmlDocument.CreateAttribute('ScalarType')).Value = $s;
    
    if (-not [string]::IsNullOrWhiteSpace($SnTypes[$key]['scalar_length'])) { $XmlElement.Attributes.Append($XmlDocument.CreateAttribute('MaxLength')).Value = $SnTypes[$key]['scalar_length'] }
    if ([string]::IsNullOrWhiteSpace($SnTypes[$key]['use_original_value'])) { $XmlElement.Attributes.Append($XmlDocument.CreateAttribute('UseOriginalValue')).Value = 'false' }
    if ([string]::IsNullOrWhiteSpace($SnTypes[$key]['hidden'])) { $XmlElement.Attributes.Append($XmlDocument.CreateAttribute('Visible')).Value = 'true' }
}

$XmlWriterSettings = [System.Xml.XmlWriterSettings]::new();
$XmlWriterSettings.Indent = $true;
$XmlWriterSettings.Encoding = [System.Text.UTF8Encoding]::new($false, $false);
$XmlWriter = [System.Xml.XmlWriter]::Create('C:\Users\lerwi\source\repos\ServiceNowServerDev\src\types.xml', $XmlWriterSettings);
try {
    $XmlDocument.WriteTo($XmlWriter);
    $XmlWriter.flush();
} finally { $XmlWriter.Close() }
#>