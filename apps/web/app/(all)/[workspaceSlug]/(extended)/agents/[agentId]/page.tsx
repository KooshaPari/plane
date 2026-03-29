/**
 * Copyright (c) 2023-present Plane contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

"use client";

import { observer } from "mobx-react";
import { Badge, Spinner, Button } from "@plane/ui";
import { Bot, ArrowLeft } from "lucide-react";

export default observer(function AgentDetailPage() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Button variant="neutral" size="sm"><ArrowLeft className="h-4 w-4" /></Button>
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-custom-background-80 flex items-center justify-center"><Bot className="h-5 w-5" /></div>
          <div>
            <h1 className="text-xl font-semibold">Agent Details</h1>
            <p className="text-sm text-text-secondary">View and manage agent configuration</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="text-sm font-medium mb-2">Overview</h3>
          <p className="text-sm text-text-secondary">Agent details will be displayed here.</p>
        </div>
      </div>
    </div>
  );
});
