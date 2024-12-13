import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { formatCurrency } from '../../lib/utils';
import { Contest } from '../../types';
import { ContestDifficulty } from '../landing/contests/ContestDifficulty';

interface ContestManagementProps {
  contests: Contest[];
  onEditContest: (id: string) => void;
  onDeleteContest: (id: string) => void;
}

export const ContestManagement: React.FC<ContestManagementProps> = ({
  contests,
  onEditContest,
  onDeleteContest,
}) => {
  return (
    <Card className="bg-dark-200/50 backdrop-blur-sm border-dark-300">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-100">Contest Management</h3>
          <Button variant="gradient">Create New Contest</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contests.map((contest) => (
            <div key={contest.id} className="p-4 bg-dark-300/50 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="font-medium text-gray-100">{contest.name}</div>
                    <ContestDifficulty difficulty={contest.difficulty} />
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {new Date(contest.startTime).toLocaleDateString()} - {new Date(contest.endTime).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEditContest(contest.id)}
                    className="text-brand-400 border-brand-400 hover:bg-brand-400/10"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDeleteContest(contest.id)}
                    className="text-red-400 border-red-400 hover:bg-red-400/10"
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-gray-400">Entry Fee</div>
                  <div className="font-medium text-gray-100">{formatCurrency(contest.entryFee)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Prize Pool</div>
                  <div className="font-medium text-brand-400">{formatCurrency(contest.prizePool)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Participants</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-1.5 bg-dark-400 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-500 rounded-full" 
                        style={{ width: `${(contest.participants / contest.maxParticipants) * 100}%` }}
                      />
                    </div>
                    <span className="font-medium text-gray-100">
                      {contest.participants}/{contest.maxParticipants}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};