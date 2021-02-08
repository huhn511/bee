(function() {var implementors = {};
implementors["bee_ledger"] = [{"text":"impl Freeze for LedgerWorker","synthetic":true,"types":[]},{"text":"impl Freeze for LedgerWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for BalanceDiff","synthetic":true,"types":[]},{"text":"impl Freeze for BalanceDiffs","synthetic":true,"types":[]},{"text":"impl Freeze for Balance","synthetic":true,"types":[]},{"text":"impl Freeze for ConflictReason","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneConfirmed","synthetic":true,"types":[]},{"text":"impl Freeze for NewConsumedOutput","synthetic":true,"types":[]},{"text":"impl Freeze for NewCreatedOutput","synthetic":true,"types":[]},{"text":"impl Freeze for OutputDiff","synthetic":true,"types":[]},{"text":"impl Freeze for Unspent","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for MerkleHasher","synthetic":true,"types":[]},{"text":"impl Freeze for WhiteFlagMetadata","synthetic":true,"types":[]}];
implementors["bee_message"] = [{"text":"impl Freeze for Message","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Freeze for MessageBuilder&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for MessageId","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for LedgerIndex","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneIndex","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneKeyRange","synthetic":true,"types":[]},{"text":"impl Freeze for Milestone","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Payload","synthetic":true,"types":[]},{"text":"impl Freeze for HashedIndex","synthetic":true,"types":[]},{"text":"impl Freeze for IndexationPayload","synthetic":true,"types":[]},{"text":"impl Freeze for MilestonePayloadEssence","synthetic":true,"types":[]},{"text":"impl Freeze for MilestonePayload","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneValidationError","synthetic":true,"types":[]},{"text":"impl Freeze for ReceiptPayload","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionPayloadEssence","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionPayloadEssenceBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for TreasuryInput","synthetic":true,"types":[]},{"text":"impl Freeze for UTXOInput","synthetic":true,"types":[]},{"text":"impl Freeze for Bech32Address","synthetic":true,"types":[]},{"text":"impl Freeze for ConsumedOutput","synthetic":true,"types":[]},{"text":"impl Freeze for CreatedOutput","synthetic":true,"types":[]},{"text":"impl Freeze for Ed25519Address","synthetic":true,"types":[]},{"text":"impl Freeze for OutputId","synthetic":true,"types":[]},{"text":"impl Freeze for SignatureLockedDustAllowanceOutput","synthetic":true,"types":[]},{"text":"impl Freeze for SignatureLockedSingleOutput","synthetic":true,"types":[]},{"text":"impl Freeze for TreasuryOutput","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionId","synthetic":true,"types":[]},{"text":"impl Freeze for TreasuryTransactionPayload","synthetic":true,"types":[]},{"text":"impl Freeze for Ed25519Signature","synthetic":true,"types":[]},{"text":"impl Freeze for ReferenceUnlock","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionPayload","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionPayloadBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for Input","synthetic":true,"types":[]},{"text":"impl Freeze for Address","synthetic":true,"types":[]},{"text":"impl Freeze for Output","synthetic":true,"types":[]},{"text":"impl Freeze for SignatureUnlock","synthetic":true,"types":[]},{"text":"impl Freeze for UnlockBlock","synthetic":true,"types":[]},{"text":"impl Freeze for SolidEntryPoint","synthetic":true,"types":[]}];
implementors["bee_network"] = [{"text":"impl Freeze for NetworkConfig","synthetic":true,"types":[]},{"text":"impl Freeze for NetworkConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for NetworkController","synthetic":true,"types":[]},{"text":"impl Freeze for PeerInfo","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for Command","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for PeerRelation","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for LISTEN_ADDRESSES","synthetic":true,"types":[]},{"text":"impl Freeze for ConnectionManager","synthetic":true,"types":[]},{"text":"impl Freeze for ConnectionManagerConfig","synthetic":true,"types":[]},{"text":"impl Freeze for InternalEvent","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for BannedList&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for PeerList","synthetic":true,"types":[]},{"text":"impl Freeze for PeerState","synthetic":true,"types":[]},{"text":"impl Freeze for PeerManager","synthetic":true,"types":[]},{"text":"impl Freeze for PeerManagerConfig","synthetic":true,"types":[]},{"text":"impl Freeze for GossipProtocol","synthetic":true,"types":[]}];
implementors["bee_node"] = [{"text":"impl Freeze for CliArgs","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for NodeConfigBuilder&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as StorageBackend&gt;::ConfigBuilder: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for BeeNode&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for BeeNodeBuilder&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as StorageBackend&gt;::Config: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for NodeConfig&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as StorageBackend&gt;::Config: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for TopologicalOrder","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Freeze for PluginWorker&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Freeze for PluginError&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as Plugin&gt;::Error: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Mps","synthetic":true,"types":[]},{"text":"impl Freeze for Mqtt","synthetic":true,"types":[]},{"text":"impl Freeze for MqttManager","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for MqttConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for MqttConfig","synthetic":true,"types":[]},{"text":"impl Freeze for VersionChecker","synthetic":true,"types":[]},{"text":"impl Freeze for Tool","synthetic":true,"types":[]},{"text":"impl Freeze for ToolError","synthetic":true,"types":[]},{"text":"impl Freeze for Ed25519Error","synthetic":true,"types":[]},{"text":"impl Freeze for Ed25519Tool","synthetic":true,"types":[]},{"text":"impl Freeze for P2pIdentityTool","synthetic":true,"types":[]},{"text":"impl Freeze for RocksdbTool","synthetic":true,"types":[]},{"text":"impl Freeze for RocksdbCommand","synthetic":true,"types":[]},{"text":"impl Freeze for RocksdbError","synthetic":true,"types":[]},{"text":"impl Freeze for SnapshotInfoTool","synthetic":true,"types":[]},{"text":"impl Freeze for SnapshotInfoError","synthetic":true,"types":[]}];
implementors["bee_peering"] = [{"text":"impl Freeze for PeeringConfig","synthetic":true,"types":[]},{"text":"impl Freeze for PeeringConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for ManualPeerManager","synthetic":true,"types":[]},{"text":"impl Freeze for ManualPeeringConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for Peer","synthetic":true,"types":[]},{"text":"impl Freeze for ManualPeeringConfig","synthetic":true,"types":[]}];
implementors["bee_pow"] = [{"text":"impl Freeze for Constant","synthetic":true,"types":[]},{"text":"impl Freeze for ConstantBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for Miner","synthetic":true,"types":[]},{"text":"impl Freeze for MinerBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["bee_protocol"] = [{"text":"impl !Freeze for ProtocolMetrics","synthetic":true,"types":[]},{"text":"impl !Freeze for Peer","synthetic":true,"types":[]},{"text":"impl !Freeze for PeerManager","synthetic":true,"types":[]},{"text":"impl !Freeze for PeerMetrics","synthetic":true,"types":[]},{"text":"impl Freeze for MessageSubmitterError","synthetic":true,"types":[]},{"text":"impl Freeze for MessageSubmitterWorker","synthetic":true,"types":[]},{"text":"impl Freeze for MessageSubmitterWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for MetricsWorker","synthetic":true,"types":[]},{"text":"impl Freeze for PeerManagerResWorker","synthetic":true,"types":[]},{"text":"impl Freeze for ProtocolCoordinatorConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for ProtocolWorkersConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for ProtocolConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for ProtocolCoordinatorConfig","synthetic":true,"types":[]},{"text":"impl Freeze for ProtocolWorkersConfig","synthetic":true,"types":[]},{"text":"impl Freeze for ProtocolConfig","synthetic":true,"types":[]},{"text":"impl Freeze for LatestMilestoneChanged","synthetic":true,"types":[]},{"text":"impl Freeze for LatestSolidMilestoneChanged","synthetic":true,"types":[]},{"text":"impl Freeze for MessageProcessed","synthetic":true,"types":[]},{"text":"impl Freeze for MessageSolidified","synthetic":true,"types":[]},{"text":"impl Freeze for MpsMetricsUpdated","synthetic":true,"types":[]},{"text":"impl Freeze for NewVertex","synthetic":true,"types":[]},{"text":"impl Freeze for TipAdded","synthetic":true,"types":[]},{"text":"impl Freeze for TipRemoved","synthetic":true,"types":[]},{"text":"impl Freeze for KeyManager","synthetic":true,"types":[]},{"text":"impl Freeze for Header","synthetic":true,"types":[]},{"text":"impl Freeze for Heartbeat","synthetic":true,"types":[]},{"text":"impl Freeze for Message","synthetic":true,"types":[]},{"text":"impl Freeze for MessageRequest","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneRequest","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Freeze for Sender&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for BroadcasterWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for BroadcasterWorker","synthetic":true,"types":[]},{"text":"impl Freeze for HeartbeaterWorker","synthetic":true,"types":[]},{"text":"impl Freeze for IndexUpdaterWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for IndexUpdaterWorker","synthetic":true,"types":[]},{"text":"impl Freeze for CustomHasher","synthetic":true,"types":[]},{"text":"impl Freeze for HashCache","synthetic":true,"types":[]},{"text":"impl Freeze for HasherWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for HasherWorker","synthetic":true,"types":[]},{"text":"impl Freeze for HashTask","synthetic":true,"types":[]},{"text":"impl Freeze for BatchStream","synthetic":true,"types":[]},{"text":"impl&lt;'pin&gt; Freeze for BatchStreamProj&lt;'pin&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for PayloadWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for PayloadWorker","synthetic":true,"types":[]},{"text":"impl Freeze for IndexationPayloadWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for IndexationPayloadWorker","synthetic":true,"types":[]},{"text":"impl Freeze for MilestonePayloadWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for MilestonePayloadWorker","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionPayloadWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionPayloadWorker","synthetic":true,"types":[]},{"text":"impl Freeze for ProcessorWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for ProcessorWorker","synthetic":true,"types":[]},{"text":"impl Freeze for MpsWorker","synthetic":true,"types":[]},{"text":"impl Freeze for PeerManagerWorker","synthetic":true,"types":[]},{"text":"impl Freeze for PacketHandler","synthetic":true,"types":[]},{"text":"impl Freeze for EventHandler","synthetic":true,"types":[]},{"text":"impl Freeze for ReadState","synthetic":true,"types":[]},{"text":"impl Freeze for PeerWorker","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for PropagatorWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for PropagatorWorker","synthetic":true,"types":[]},{"text":"impl !Freeze for RequestedMessages","synthetic":true,"types":[]},{"text":"impl Freeze for MessageRequesterWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for MessageRequesterWorker","synthetic":true,"types":[]},{"text":"impl !Freeze for RequestedMilestones","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneRequesterWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneRequesterWorker","synthetic":true,"types":[]},{"text":"impl Freeze for MessageResponderWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for MessageResponderWorker","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneResponderWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneResponderWorker","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneSolidifierWorkerEvent","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneSolidifierWorker","synthetic":true,"types":[]},{"text":"impl Freeze for StatusWorker","synthetic":true,"types":[]},{"text":"impl Freeze for TipPoolCleanerWorker","synthetic":true,"types":[]}];
implementors["bee_rest_api"] = [{"text":"impl Freeze for ApiWorker","synthetic":true,"types":[]},{"text":"impl Freeze for CustomRejection","synthetic":true,"types":[]},{"text":"impl Freeze for RestApiConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for RestApiConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for SuccessBody&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ErrorBody&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultErrorResponse","synthetic":true,"types":[]},{"text":"impl Freeze for AddPeerResponse","synthetic":true,"types":[]},{"text":"impl Freeze for BalanceForAddressResponse","synthetic":true,"types":[]},{"text":"impl Freeze for InfoResponse","synthetic":true,"types":[]},{"text":"impl Freeze for MessageResponse","synthetic":true,"types":[]},{"text":"impl Freeze for MessageChildrenResponse","synthetic":true,"types":[]},{"text":"impl Freeze for MessageMetadataResponse","synthetic":true,"types":[]},{"text":"impl Freeze for LedgerInclusionStateDto","synthetic":true,"types":[]},{"text":"impl Freeze for MessagesForIndexResponse","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneResponse","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneUtxoChanges","synthetic":true,"types":[]},{"text":"impl Freeze for OutputResponse","synthetic":true,"types":[]},{"text":"impl Freeze for OutputsForAddressResponse","synthetic":true,"types":[]},{"text":"impl Freeze for PeerResponse","synthetic":true,"types":[]},{"text":"impl Freeze for PeersResponse","synthetic":true,"types":[]},{"text":"impl Freeze for SubmitMessageResponse","synthetic":true,"types":[]},{"text":"impl Freeze for TipsResponse","synthetic":true,"types":[]},{"text":"impl Freeze for MessageDto","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionDto","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionEssenceDto","synthetic":true,"types":[]},{"text":"impl Freeze for UtxoInputDto","synthetic":true,"types":[]},{"text":"impl Freeze for TreasuryInputDto","synthetic":true,"types":[]},{"text":"impl Freeze for SignatureLockedSingleOutputDto","synthetic":true,"types":[]},{"text":"impl Freeze for SignatureLockedDustAllowanceOutputDto","synthetic":true,"types":[]},{"text":"impl Freeze for Ed25519AddressDto","synthetic":true,"types":[]},{"text":"impl Freeze for TreasuryOutputDto","synthetic":true,"types":[]},{"text":"impl Freeze for SignatureUnlockDto","synthetic":true,"types":[]},{"text":"impl Freeze for Ed25519SignatureDto","synthetic":true,"types":[]},{"text":"impl Freeze for ReferenceUnlockDto","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneDto","synthetic":true,"types":[]},{"text":"impl Freeze for IndexationDto","synthetic":true,"types":[]},{"text":"impl Freeze for ReceiptDto","synthetic":true,"types":[]},{"text":"impl Freeze for TreasuryTransactionDto","synthetic":true,"types":[]},{"text":"impl Freeze for PeerDto","synthetic":true,"types":[]},{"text":"impl Freeze for GossipDto","synthetic":true,"types":[]},{"text":"impl Freeze for HeartbeatDto","synthetic":true,"types":[]},{"text":"impl Freeze for MetricsDto","synthetic":true,"types":[]},{"text":"impl Freeze for PayloadDto","synthetic":true,"types":[]},{"text":"impl Freeze for InputDto","synthetic":true,"types":[]},{"text":"impl Freeze for OutputDto","synthetic":true,"types":[]},{"text":"impl Freeze for AddressDto","synthetic":true,"types":[]},{"text":"impl Freeze for UnlockBlockDto","synthetic":true,"types":[]},{"text":"impl Freeze for SignatureDto","synthetic":true,"types":[]},{"text":"impl Freeze for RelationDto","synthetic":true,"types":[]}];
implementors["bee_snapshot"] = [{"text":"impl Freeze for Kind","synthetic":true,"types":[]},{"text":"impl Freeze for SnapshotConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for SnapshotConfig","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for SnapshotHeader","synthetic":true,"types":[]},{"text":"impl Freeze for SnapshotInfo","synthetic":true,"types":[]},{"text":"impl Freeze for MilestoneDiff","synthetic":true,"types":[]},{"text":"impl Freeze for SnapshotWorker","synthetic":true,"types":[]}];
implementors["bee_storage_rocksdb"] = [{"text":"impl Freeze for StorageBatch","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Freeze for StorageStream&lt;'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'pin, 'a, K, V&gt; Freeze for StorageStreamProj&lt;'pin, 'a, K, V&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for CompactionStyle","synthetic":true,"types":[]},{"text":"impl Freeze for CompressionType","synthetic":true,"types":[]},{"text":"impl Freeze for StorageConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for RocksDBEnvConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for RocksDBConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for StorageConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RocksDBEnvConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RocksDBConfig","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Storage","synthetic":true,"types":[]},{"text":"impl Freeze for System","synthetic":true,"types":[]},{"text":"impl Freeze for StorageHealth","synthetic":true,"types":[]},{"text":"impl Freeze for StorageVersion","synthetic":true,"types":[]}];
implementors["bee_tangle"] = [{"text":"impl&lt;T, H&nbsp;=&nbsp;NullHooks&lt;T&gt;&gt; !Freeze for Tangle&lt;T, H&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for MessageRef","synthetic":true,"types":[]},{"text":"impl Freeze for TangleConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for TangleConfig","synthetic":true,"types":[]},{"text":"impl Freeze for Flags","synthetic":true,"types":[]},{"text":"impl Freeze for MessageMetadata","synthetic":true,"types":[]},{"text":"impl Freeze for IndexId","synthetic":true,"types":[]},{"text":"impl Freeze for MessageMetadataError","synthetic":true,"types":[]},{"text":"impl Freeze for IndexIdError","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Freeze for StorageHooks&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Freeze for MsTangle&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for TipMetadata","synthetic":true,"types":[]},{"text":"impl Freeze for UrtsTipPool","synthetic":true,"types":[]},{"text":"impl Freeze for Score","synthetic":true,"types":[]},{"text":"impl Freeze for TangleWorker","synthetic":true,"types":[]},{"text":"impl Freeze for PruningConfigBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for PruningConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for NullHooks&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Vertex&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()