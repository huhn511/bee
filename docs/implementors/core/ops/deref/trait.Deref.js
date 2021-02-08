(function() {var implementors = {};
implementors["bee_ledger"] = [{"text":"impl Deref for Unspent","synthetic":false,"types":[]}];
implementors["bee_message"] = [{"text":"impl Deref for LedgerIndex","synthetic":false,"types":[]},{"text":"impl Deref for MilestoneIndex","synthetic":false,"types":[]},{"text":"impl Deref for Bech32Address","synthetic":false,"types":[]},{"text":"impl Deref for CreatedOutput","synthetic":false,"types":[]},{"text":"impl Deref for SolidEntryPoint","synthetic":false,"types":[]}];
implementors["bee_network"] = [{"text":"impl Deref for LISTEN_ADDRESSES","synthetic":false,"types":[]}];
implementors["bee_tangle"] = [{"text":"impl&lt;B&gt; Deref for MsTangle&lt;B&gt;","synthetic":false,"types":[]},{"text":"impl Deref for MessageRef","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()