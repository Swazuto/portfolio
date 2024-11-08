import styled from 'styled-components';

const Repo = ({
  url,
  name,
  primaryLanguage,
  description,
}: {
  url: string;
  name: string;
  primaryLanguage: string;
  description: string;
}) => {
  return (
    <a href={url} target="_blank" rel="noopener" className="block mb-4 p-4 border rounded-lg transition-colors hover:bg-gray-800">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col w-1/4">
          <h5 className="text-lg font-semibold">Nome</h5>
          <p className="text-sm">{name}</p>
        </div>
        <div className="flex flex-col w-1/4">
          <h5 className="text-lg font-semibold">Linguagem</h5>
          <p className="text-sm flex items-center">
            {primaryLanguage}{' '}
            <LanguageColorBlip
              color={
                primaryLanguage === 'JavaScript'
                  ? '#ffff00'
                  : primaryLanguage === 'Python'
                  ? '#00bfff'
                  : primaryLanguage === 'HTML'
                  ? '#ff7f24'
                  : primaryLanguage === 'Elixir'
                  ? '#9c1fa5'
                  : primaryLanguage === 'TypeScript'
                  ? '#007acc'
                  : primaryLanguage === 'Rust'
                  ? '#dea584'
                  : 'hsl(var(--primary-900))'
              }
            />
          </p>
        </div>
        <div className="flex flex-col w-2/4">
          <h5 className="text-lg font-semibold">Descrição</h5>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};

const LanguageColorBlip = styled.span<{ color: string }>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-left: 5px;
`;

export default Repo;
