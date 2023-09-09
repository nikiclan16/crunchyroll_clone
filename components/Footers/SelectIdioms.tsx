import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const names = [
  'English (US)',
  'Español',
  'Español (España)',
  'Português (Brasil)',
  'Português (Portugal)',
  'Français (France)',
  'Deutsch',
  'العربية',
  'Italiano',
  'Русский',
  'हिंदी',
];

export default function SelectIdioms() {
    const [personName, setPersonName] = React.useState<string>('Español');
  
    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
      const {
        target: { value },
      } = event;
      setPersonName(value as string);
    };
  
    return (
      <div>
        <FormControl className="idioms-footer">
          <Select
            style={{
              position: 'relative',
              border: '2px solid #000000',
              borderRadius: '0',
            }}
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (!selected) {
                return <em>Idiomas</em>;
              }
  
              return (selected);
            }}
            MenuProps={{
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
            }}
          >
            <MenuItem value="" disabled>
              <em>Idiomas</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
  
