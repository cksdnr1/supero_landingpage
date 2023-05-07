import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Background } from '../background/Background';

const VerticalFeatures = () => (
    <Background color="bg-[#101012]">
        <Section
            title="슈페로와 운동 해보세요!"
            description="슈페로는 운동을 도전하고 공유하여 즐기기 위해 만들어졌어요"
            yPadding='py-0'
        >
            <VerticalFeatureRow
                title="276개의 움직이는 운동"
                titleColor = "text-primary-500"
                description="움직이는 영상으로 쉽게 바벨, 덤벨, 맨몸, 유산소등 276개의 운동을 시작 할 수 있어요. 루틴으로 자신만의 운동을 관리하고 기록하고 중량을 늘려보세요."
                image="/assets/images/143613-7a28cb_360.webp"
                imageAlt="슈페로 운동 이미지 영상"
            />
            <VerticalFeatureRow
                title="친구와 공유되는 피드"
                titleColor = "text-primary-600"
                description="운동 후 친구에게 운동 기록을 피드로 공유 할 수 있어요. 친구 운동을 좋아해보고 댓글로 응원해보세요. 즐거운 운동이 될 수 있어요."
                image="/assets/images/feed_image.png"
                imageAlt="슈페로 피드 영상"
                reverse
            />
            <VerticalFeatureRow
                title="개인 커스텀 운동 및 루틴"
                titleColor = "text-primary-500"
                description="필요한 운동은 즉시 만들 수 있어요. 개인 맞춤형의 새로운 운동으로 루틴을 만들어 보세요. 언제든지 원하는 운동을 할 수 있어요."
                image="/assets/images/ex_custom.png"
                imageAlt="커스텀 운동 영상"
            />
        </Section>
    </Background>
);

export { VerticalFeatures };
