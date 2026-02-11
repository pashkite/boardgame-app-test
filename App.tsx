import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Provider as PaperProvider, Card, Title, Paragraph, Button } from 'react-native-paper';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #1a1a2e;
  padding: 20px;
`;

const Header = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #eee;
  text-align: center;
  margin: 20px 0;
`;

const GameCard = styled.View`
  background-color: #16213e;
  border-radius: 12px;
  padding: 20px;
  margin: 10px 0;
  border: 2px solid #0f3460;
`;

const GameTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #00adb5;
  margin-bottom: 10px;
`;

const GameDescription = styled.Text`
  font-size: 16px;
  color: #eeeeee;
  line-height: 24px;
`;

const PlayerCount = styled.Text`
  font-size: 14px;
  color: #00adb5;
  margin-top: 10px;
`;

interface BoardGame {
  id: number;
  name: string;
  players: string;
  description: string;
  duration: string;
}

const boardGames: BoardGame[] = [
  {
    id: 1,
    name: '체스 (Chess)',
    players: '2명',
    description: '전략적 사고와 계획이 필요한 고전 보드게임. 각 말의 특성을 활용해 상대 킹을 체크메이트하세요.',
    duration: '30-60분'
  },
  {
    id: 2,
    name: '카탄 (Catan)',
    players: '3-4명',
    description: '자원을 수집하고 거래하며 정착지를 건설하는 전략 게임. 주사위 운과 협상 능력이 중요합니다.',
    duration: '60-120분'
  },
  {
    id: 3,
    name: '스플렌더 (Splendor)',
    players: '2-4명',
    description: '보석 상인이 되어 광산을 개발하고 귀족들의 후원을 받는 경제 전략 게임.',
    duration: '30분'
  },
  {
    id: 4,
    name: '코드네임 (Codenames)',
    players: '4-8명',
    description: '팀으로 나뉘어 스파이마스터의 힌트를 듣고 요원을 찾아내는 단어 연상 게임.',
    duration: '15-30분'
  },
  {
    id: 5,
    name: '아컴호러 (Arkham Horror)',
    players: '1-8명',
    description: '협력형 호러 게임. 플레이어들이 함께 고대의 악을 막기 위해 싸웁니다.',
    duration: '120-180분'
  }
];

export default function App() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  return (
    <PaperProvider>
      <Container>
        <Header>🎲 보드게임 컬렉션</Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          {boardGames.map((game) => (
            <TouchableOpacity
              key={game.id}
              onPress={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
              activeOpacity={0.8}
            >
              <GameCard>
                <GameTitle>{game.name}</GameTitle>
                <GameDescription>{game.description}</GameDescription>
                <PlayerCount>👥 {game.players} | ⏱️ {game.duration}</PlayerCount>
                {selectedGame === game.id && (
                  <View style={{ marginTop: 15 }}>
                    <Button
                      mode="contained"
                      buttonColor="#00adb5"
                      textColor="#fff"
                      onPress={() => alert(`${game.name} 게임을 시작합니다!`)}
                    >
                      게임 시작하기
                    </Button>
                  </View>
                )}
              </GameCard>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Container>
    </PaperProvider>
  );
}
