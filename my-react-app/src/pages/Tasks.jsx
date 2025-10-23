import React from 'react';
import TaskManager from '../components/TaskManager';
import { Card } from '../components/Card';

export default function Tasks() {
    return (
        <div className="p-6">
        <Card>
            <TaskManager />
        </Card>
        </div>
    );
}
