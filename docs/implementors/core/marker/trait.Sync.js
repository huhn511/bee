(function() {var implementors = {};
implementors["bee_ledger"] = [{"text":"impl Sync for LedgerWorker","synthetic":true,"types":[]},{"text":"impl Sync for LedgerWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for BalanceDiff","synthetic":true,"types":[]},{"text":"impl Sync for BalanceDiffs","synthetic":true,"types":[]},{"text":"impl Sync for Balance","synthetic":true,"types":[]},{"text":"impl Sync for ConflictReason","synthetic":true,"types":[]},{"text":"impl !Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneConfirmed","synthetic":true,"types":[]},{"text":"impl Sync for NewConsumedOutput","synthetic":true,"types":[]},{"text":"impl Sync for NewCreatedOutput","synthetic":true,"types":[]},{"text":"impl Sync for OutputDiff","synthetic":true,"types":[]},{"text":"impl Sync for Unspent","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for MerkleHasher","synthetic":true,"types":[]},{"text":"impl Sync for WhiteFlagMetadata","synthetic":true,"types":[]}];
implementors["bee_message"] = [{"text":"impl Sync for Message","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Sync for MessageBuilder&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for MessageId","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for LedgerIndex","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneIndex","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneKeyRange","synthetic":true,"types":[]},{"text":"impl Sync for Milestone","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for Payload","synthetic":true,"types":[]},{"text":"impl Sync for HashedIndex","synthetic":true,"types":[]},{"text":"impl Sync for IndexationPayload","synthetic":true,"types":[]},{"text":"impl Sync for MilestonePayloadEssence","synthetic":true,"types":[]},{"text":"impl Sync for MilestonePayload","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneValidationError","synthetic":true,"types":[]},{"text":"impl Sync for ReceiptPayload","synthetic":true,"types":[]},{"text":"impl Sync for TransactionPayloadEssence","synthetic":true,"types":[]},{"text":"impl Sync for TransactionPayloadEssenceBuilder","synthetic":true,"types":[]},{"text":"impl Sync for TreasuryInput","synthetic":true,"types":[]},{"text":"impl Sync for UTXOInput","synthetic":true,"types":[]},{"text":"impl Sync for Bech32Address","synthetic":true,"types":[]},{"text":"impl Sync for ConsumedOutput","synthetic":true,"types":[]},{"text":"impl Sync for CreatedOutput","synthetic":true,"types":[]},{"text":"impl Sync for Ed25519Address","synthetic":true,"types":[]},{"text":"impl Sync for OutputId","synthetic":true,"types":[]},{"text":"impl Sync for SignatureLockedDustAllowanceOutput","synthetic":true,"types":[]},{"text":"impl Sync for SignatureLockedSingleOutput","synthetic":true,"types":[]},{"text":"impl Sync for TreasuryOutput","synthetic":true,"types":[]},{"text":"impl Sync for TransactionId","synthetic":true,"types":[]},{"text":"impl Sync for TreasuryTransactionPayload","synthetic":true,"types":[]},{"text":"impl Sync for Ed25519Signature","synthetic":true,"types":[]},{"text":"impl Sync for ReferenceUnlock","synthetic":true,"types":[]},{"text":"impl Sync for TransactionPayload","synthetic":true,"types":[]},{"text":"impl Sync for TransactionPayloadBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Input","synthetic":true,"types":[]},{"text":"impl Sync for Address","synthetic":true,"types":[]},{"text":"impl Sync for Output","synthetic":true,"types":[]},{"text":"impl Sync for SignatureUnlock","synthetic":true,"types":[]},{"text":"impl Sync for UnlockBlock","synthetic":true,"types":[]},{"text":"impl Sync for SolidEntryPoint","synthetic":true,"types":[]}];
implementors["bee_network"] = [{"text":"impl Sync for NetworkConfig","synthetic":true,"types":[]},{"text":"impl Sync for NetworkConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for NetworkController","synthetic":true,"types":[]},{"text":"impl Sync for PeerInfo","synthetic":true,"types":[]},{"text":"impl Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for Command","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for PeerRelation","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for LISTEN_ADDRESSES","synthetic":true,"types":[]},{"text":"impl Sync for ConnectionManager","synthetic":true,"types":[]},{"text":"impl !Sync for ConnectionManagerConfig","synthetic":true,"types":[]},{"text":"impl Sync for InternalEvent","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for BannedList&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for PeerList","synthetic":true,"types":[]},{"text":"impl Sync for PeerState","synthetic":true,"types":[]},{"text":"impl Sync for PeerManager","synthetic":true,"types":[]},{"text":"impl Sync for PeerManagerConfig","synthetic":true,"types":[]},{"text":"impl Sync for GossipProtocol","synthetic":true,"types":[]}];
implementors["bee_node"] = [{"text":"impl Sync for CliArgs","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Sync for NodeConfigBuilder&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as StorageBackend&gt;::ConfigBuilder: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Sync for BeeNode&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Sync for BeeNodeBuilder&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Sync for NodeConfig&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as StorageBackend&gt;::Config: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for TopologicalOrder","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Sync for PluginWorker&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Sync for PluginError&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as Plugin&gt;::Error: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Mps","synthetic":true,"types":[]},{"text":"impl Sync for Mqtt","synthetic":true,"types":[]},{"text":"impl Sync for MqttManager","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for MqttConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for MqttConfig","synthetic":true,"types":[]},{"text":"impl Sync for VersionChecker","synthetic":true,"types":[]},{"text":"impl Sync for Tool","synthetic":true,"types":[]},{"text":"impl !Sync for ToolError","synthetic":true,"types":[]},{"text":"impl Sync for Ed25519Error","synthetic":true,"types":[]},{"text":"impl Sync for Ed25519Tool","synthetic":true,"types":[]},{"text":"impl Sync for P2pIdentityTool","synthetic":true,"types":[]},{"text":"impl Sync for RocksdbTool","synthetic":true,"types":[]},{"text":"impl Sync for RocksdbCommand","synthetic":true,"types":[]},{"text":"impl Sync for RocksdbError","synthetic":true,"types":[]},{"text":"impl Sync for SnapshotInfoTool","synthetic":true,"types":[]},{"text":"impl !Sync for SnapshotInfoError","synthetic":true,"types":[]}];
implementors["bee_peering"] = [{"text":"impl Sync for PeeringConfig","synthetic":true,"types":[]},{"text":"impl Sync for PeeringConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for ManualPeerManager","synthetic":true,"types":[]},{"text":"impl Sync for ManualPeeringConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Peer","synthetic":true,"types":[]},{"text":"impl Sync for ManualPeeringConfig","synthetic":true,"types":[]}];
implementors["bee_pow"] = [{"text":"impl Sync for Constant","synthetic":true,"types":[]},{"text":"impl Sync for ConstantBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Miner","synthetic":true,"types":[]},{"text":"impl Sync for MinerBuilder","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]}];
implementors["bee_protocol"] = [{"text":"impl Sync for ProtocolMetrics","synthetic":true,"types":[]},{"text":"impl Sync for Peer","synthetic":true,"types":[]},{"text":"impl Sync for PeerManager","synthetic":true,"types":[]},{"text":"impl Sync for PeerMetrics","synthetic":true,"types":[]},{"text":"impl Sync for MessageSubmitterError","synthetic":true,"types":[]},{"text":"impl Sync for MessageSubmitterWorker","synthetic":true,"types":[]},{"text":"impl Sync for MessageSubmitterWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for MetricsWorker","synthetic":true,"types":[]},{"text":"impl Sync for PeerManagerResWorker","synthetic":true,"types":[]},{"text":"impl Sync for ProtocolCoordinatorConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for ProtocolWorkersConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for ProtocolConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for ProtocolCoordinatorConfig","synthetic":true,"types":[]},{"text":"impl Sync for ProtocolWorkersConfig","synthetic":true,"types":[]},{"text":"impl Sync for ProtocolConfig","synthetic":true,"types":[]},{"text":"impl Sync for LatestMilestoneChanged","synthetic":true,"types":[]},{"text":"impl Sync for LatestSolidMilestoneChanged","synthetic":true,"types":[]},{"text":"impl Sync for MessageProcessed","synthetic":true,"types":[]},{"text":"impl Sync for MessageSolidified","synthetic":true,"types":[]},{"text":"impl Sync for MpsMetricsUpdated","synthetic":true,"types":[]},{"text":"impl Sync for NewVertex","synthetic":true,"types":[]},{"text":"impl Sync for TipAdded","synthetic":true,"types":[]},{"text":"impl Sync for TipRemoved","synthetic":true,"types":[]},{"text":"impl Sync for KeyManager","synthetic":true,"types":[]},{"text":"impl Sync for Header","synthetic":true,"types":[]},{"text":"impl Sync for Heartbeat","synthetic":true,"types":[]},{"text":"impl Sync for Message","synthetic":true,"types":[]},{"text":"impl Sync for MessageRequest","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneRequest","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Sync for Sender&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for BroadcasterWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for BroadcasterWorker","synthetic":true,"types":[]},{"text":"impl Sync for HeartbeaterWorker","synthetic":true,"types":[]},{"text":"impl Sync for IndexUpdaterWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for IndexUpdaterWorker","synthetic":true,"types":[]},{"text":"impl Sync for CustomHasher","synthetic":true,"types":[]},{"text":"impl Sync for HashCache","synthetic":true,"types":[]},{"text":"impl Sync for HasherWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for HasherWorker","synthetic":true,"types":[]},{"text":"impl Sync for HashTask","synthetic":true,"types":[]},{"text":"impl Sync for BatchStream","synthetic":true,"types":[]},{"text":"impl&lt;'pin&gt; Sync for BatchStreamProj&lt;'pin&gt;","synthetic":true,"types":[]},{"text":"impl Sync for PayloadWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for PayloadWorker","synthetic":true,"types":[]},{"text":"impl Sync for IndexationPayloadWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for IndexationPayloadWorker","synthetic":true,"types":[]},{"text":"impl Sync for MilestonePayloadWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for MilestonePayloadWorker","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for TransactionPayloadWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for TransactionPayloadWorker","synthetic":true,"types":[]},{"text":"impl Sync for ProcessorWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for ProcessorWorker","synthetic":true,"types":[]},{"text":"impl Sync for MpsWorker","synthetic":true,"types":[]},{"text":"impl Sync for PeerManagerWorker","synthetic":true,"types":[]},{"text":"impl Sync for PacketHandler","synthetic":true,"types":[]},{"text":"impl Sync for EventHandler","synthetic":true,"types":[]},{"text":"impl Sync for ReadState","synthetic":true,"types":[]},{"text":"impl Sync for PeerWorker","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for PropagatorWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for PropagatorWorker","synthetic":true,"types":[]},{"text":"impl Sync for RequestedMessages","synthetic":true,"types":[]},{"text":"impl Sync for MessageRequesterWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for MessageRequesterWorker","synthetic":true,"types":[]},{"text":"impl Sync for RequestedMilestones","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneRequesterWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneRequesterWorker","synthetic":true,"types":[]},{"text":"impl Sync for MessageResponderWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for MessageResponderWorker","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneResponderWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneResponderWorker","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneSolidifierWorkerEvent","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneSolidifierWorker","synthetic":true,"types":[]},{"text":"impl Sync for StatusWorker","synthetic":true,"types":[]},{"text":"impl Sync for TipPoolCleanerWorker","synthetic":true,"types":[]}];
implementors["bee_rest_api"] = [{"text":"impl Sync for ApiWorker","synthetic":true,"types":[]},{"text":"impl Sync for CustomRejection","synthetic":true,"types":[]},{"text":"impl Sync for RestApiConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for RestApiConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for SuccessBody&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ErrorBody&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for DefaultErrorResponse","synthetic":true,"types":[]},{"text":"impl Sync for AddPeerResponse","synthetic":true,"types":[]},{"text":"impl Sync for BalanceForAddressResponse","synthetic":true,"types":[]},{"text":"impl Sync for InfoResponse","synthetic":true,"types":[]},{"text":"impl Sync for MessageResponse","synthetic":true,"types":[]},{"text":"impl Sync for MessageChildrenResponse","synthetic":true,"types":[]},{"text":"impl Sync for MessageMetadataResponse","synthetic":true,"types":[]},{"text":"impl Sync for LedgerInclusionStateDto","synthetic":true,"types":[]},{"text":"impl Sync for MessagesForIndexResponse","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneResponse","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneUtxoChanges","synthetic":true,"types":[]},{"text":"impl Sync for OutputResponse","synthetic":true,"types":[]},{"text":"impl Sync for OutputsForAddressResponse","synthetic":true,"types":[]},{"text":"impl Sync for PeerResponse","synthetic":true,"types":[]},{"text":"impl Sync for PeersResponse","synthetic":true,"types":[]},{"text":"impl Sync for SubmitMessageResponse","synthetic":true,"types":[]},{"text":"impl Sync for TipsResponse","synthetic":true,"types":[]},{"text":"impl Sync for MessageDto","synthetic":true,"types":[]},{"text":"impl Sync for TransactionDto","synthetic":true,"types":[]},{"text":"impl Sync for TransactionEssenceDto","synthetic":true,"types":[]},{"text":"impl Sync for UtxoInputDto","synthetic":true,"types":[]},{"text":"impl Sync for TreasuryInputDto","synthetic":true,"types":[]},{"text":"impl Sync for SignatureLockedSingleOutputDto","synthetic":true,"types":[]},{"text":"impl Sync for SignatureLockedDustAllowanceOutputDto","synthetic":true,"types":[]},{"text":"impl Sync for Ed25519AddressDto","synthetic":true,"types":[]},{"text":"impl Sync for TreasuryOutputDto","synthetic":true,"types":[]},{"text":"impl Sync for SignatureUnlockDto","synthetic":true,"types":[]},{"text":"impl Sync for Ed25519SignatureDto","synthetic":true,"types":[]},{"text":"impl Sync for ReferenceUnlockDto","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneDto","synthetic":true,"types":[]},{"text":"impl Sync for IndexationDto","synthetic":true,"types":[]},{"text":"impl Sync for ReceiptDto","synthetic":true,"types":[]},{"text":"impl Sync for TreasuryTransactionDto","synthetic":true,"types":[]},{"text":"impl Sync for PeerDto","synthetic":true,"types":[]},{"text":"impl Sync for GossipDto","synthetic":true,"types":[]},{"text":"impl Sync for HeartbeatDto","synthetic":true,"types":[]},{"text":"impl Sync for MetricsDto","synthetic":true,"types":[]},{"text":"impl Sync for PayloadDto","synthetic":true,"types":[]},{"text":"impl Sync for InputDto","synthetic":true,"types":[]},{"text":"impl Sync for OutputDto","synthetic":true,"types":[]},{"text":"impl Sync for AddressDto","synthetic":true,"types":[]},{"text":"impl Sync for UnlockBlockDto","synthetic":true,"types":[]},{"text":"impl Sync for SignatureDto","synthetic":true,"types":[]},{"text":"impl Sync for RelationDto","synthetic":true,"types":[]}];
implementors["bee_snapshot"] = [{"text":"impl Sync for Kind","synthetic":true,"types":[]},{"text":"impl Sync for SnapshotConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for SnapshotConfig","synthetic":true,"types":[]},{"text":"impl !Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for SnapshotHeader","synthetic":true,"types":[]},{"text":"impl Sync for SnapshotInfo","synthetic":true,"types":[]},{"text":"impl Sync for MilestoneDiff","synthetic":true,"types":[]},{"text":"impl Sync for SnapshotWorker","synthetic":true,"types":[]}];
implementors["bee_storage_rocksdb"] = [{"text":"impl !Sync for StorageBatch","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Sync for StorageStream&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'pin, 'a, K, V&gt; Sync for StorageStreamProj&lt;'pin, 'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for CompactionStyle","synthetic":true,"types":[]},{"text":"impl Sync for CompressionType","synthetic":true,"types":[]},{"text":"impl Sync for StorageConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for RocksDBEnvConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for RocksDBConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for StorageConfig","synthetic":true,"types":[]},{"text":"impl Sync for RocksDBEnvConfig","synthetic":true,"types":[]},{"text":"impl Sync for RocksDBConfig","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for Storage","synthetic":true,"types":[]},{"text":"impl Sync for System","synthetic":true,"types":[]},{"text":"impl Sync for StorageHealth","synthetic":true,"types":[]},{"text":"impl Sync for StorageVersion","synthetic":true,"types":[]}];
implementors["bee_tangle"] = [{"text":"impl&lt;T, H&gt; Sync for Tangle&lt;T, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for MessageRef","synthetic":true,"types":[]},{"text":"impl Sync for TangleConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for TangleConfig","synthetic":true,"types":[]},{"text":"impl Sync for Flags","synthetic":true,"types":[]},{"text":"impl Sync for MessageMetadata","synthetic":true,"types":[]},{"text":"impl Sync for IndexId","synthetic":true,"types":[]},{"text":"impl Sync for MessageMetadataError","synthetic":true,"types":[]},{"text":"impl Sync for IndexIdError","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Sync for StorageHooks&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Sync for MsTangle&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for TipMetadata","synthetic":true,"types":[]},{"text":"impl Sync for UrtsTipPool","synthetic":true,"types":[]},{"text":"impl Sync for Score","synthetic":true,"types":[]},{"text":"impl Sync for TangleWorker","synthetic":true,"types":[]},{"text":"impl Sync for PruningConfigBuilder","synthetic":true,"types":[]},{"text":"impl Sync for PruningConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for NullHooks&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Vertex&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()