import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => alert('Searched: ' + searchTerm);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="overflow-hidden flex max-w-xs h-9 rounded-md items-center bg-accent/10">
      <Input
        type="text"
        placeholder="Search . . ."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="h-20 border-none bg-transparent"
      />
      <Button className="h-20 bg-transparent hover:bg-gold" size="icon" onClick={handleSearch}>
        <Search className="font-bold text-primary-foreground" />
      </Button>
    </div>
  );
};

export default SearchBar;
